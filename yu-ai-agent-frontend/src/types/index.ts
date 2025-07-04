export interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  time: number
  type?: 'normal' | 'typing' | 'error'
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: number
  updatedAt: number
}

export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error'

export type AIType = 'love' | 'super' | 'default'

export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto'
  language: 'zh-CN' | 'en-US'
  fontSize: 'small' | 'medium' | 'large'
}