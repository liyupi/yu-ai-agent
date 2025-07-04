import request from '@/utils/request'
import type { AIType } from '@/types'

export interface SSEOptions {
  onMessage?: (data: string) => void
  onError?: (error: Event) => void
  onOpen?: (event: Event) => void
  onClose?: (event: Event) => void
}

export class ChatService {
  private static instance: ChatService
  private eventSources: Map<string, EventSource> = new Map()

  static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService()
    }
    return ChatService.instance
  }

  /**
   * 建立 SSE 连接
   */
  connectSSE(
    url: string,
    params: Record<string, any>,
    options: SSEOptions = {}
  ): EventSource {
    // 构建查询字符串
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&')
    
    const fullUrl = `${request.defaults.baseURL}${url}?${queryString}`
    
    // 关闭已存在的连接
    this.closeConnection(url)
    
    // 创建新的 EventSource
    const eventSource = new EventSource(fullUrl)
    this.eventSources.set(url, eventSource)
    
    // 绑定事件处理器
    eventSource.onopen = (event) => {
      console.log('SSE connection opened:', url)
      options.onOpen?.(event)
    }
    
    eventSource.onmessage = (event) => {
      try {
        const data = event.data
        if (data === '[DONE]') {
          console.log('SSE stream completed:', url)
          options.onMessage?.(data)
          this.closeConnection(url)
        } else {
          options.onMessage?.(data)
        }
      } catch (error) {
        console.error('Error parsing SSE message:', error)
        options.onError?.(error as Event)
      }
    }
    
    eventSource.onerror = (error) => {
      console.error('SSE error:', error)
      options.onError?.(error)
      this.closeConnection(url)
    }
    
    return eventSource
  }

  /**
   * 关闭特定的 SSE 连接
   */
  closeConnection(url: string): void {
    const eventSource = this.eventSources.get(url)
    if (eventSource) {
      eventSource.close()
      this.eventSources.delete(url)
    }
  }

  /**
   * 关闭所有 SSE 连接
   */
  closeAllConnections(): void {
    this.eventSources.forEach((eventSource, url) => {
      eventSource.close()
    })
    this.eventSources.clear()
  }

  /**
   * AI恋爱大师聊天
   */
  chatWithLoveApp(message: string, chatId: string, options: SSEOptions = {}): EventSource {
    return this.connectSSE('/ai/love_app/chat/sse', { message, chatId }, options)
  }

  /**
   * AI超级智能体聊天
   */
  chatWithManus(message: string, options: SSEOptions = {}): EventSource {
    return this.connectSSE('/ai/manus/chat', { message }, options)
  }

  /**
   * 根据AI类型选择聊天服务
   */
  chatWithAI(
    type: AIType,
    message: string,
    chatId?: string,
    options: SSEOptions = {}
  ): EventSource {
    switch (type) {
      case 'love':
        return this.chatWithLoveApp(message, chatId || '', options)
      case 'super':
        return this.chatWithManus(message, options)
      default:
        throw new Error(`Unsupported AI type: ${type}`)
    }
  }
}

// 导出单例实例
export const chatService = ChatService.getInstance()