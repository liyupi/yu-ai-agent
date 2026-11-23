import { defineStore } from 'pinia'
import type { ChatMessage, ChatSession, ConnectionStatus, AIType } from '@/types'

export const useChatStore = defineStore('chat', () => {
  // 状态
  const sessions = ref<ChatSession[]>([])
  const currentSessionId = ref<string>('')
  const connectionStatus = ref<ConnectionStatus>('disconnected')
  const isTyping = ref(false)

  // Getters
  const currentSession = computed(() => 
    sessions.value.find(session => session.id === currentSessionId.value)
  )

  const currentMessages = computed(() => 
    currentSession.value?.messages || []
  )

  // Actions
  const generateSessionId = (type: AIType): string => {
    return `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  const createSession = (type: AIType, title?: string): string => {
    const sessionId = generateSessionId(type)
    const newSession: ChatSession = {
      id: sessionId,
      title: title || `${type === 'love' ? 'AI恋爱大师' : 'AI超级智能体'}对话`,
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    
    sessions.value.push(newSession)
    currentSessionId.value = sessionId
    
    return sessionId
  }

  const addMessage = (sessionId: string, message: Omit<ChatMessage, 'id'>) => {
    const session = sessions.value.find(s => s.id === sessionId)
    if (!session) return

    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    session.messages.push(newMessage)
    session.updatedAt = Date.now()
  }

  const updateMessageContent = (sessionId: string, messageId: string, content: string) => {
    const session = sessions.value.find(s => s.id === sessionId)
    if (!session) return

    const message = session.messages.find(m => m.id === messageId)
    if (message) {
      message.content = content
      session.updatedAt = Date.now()
    }
  }

  const clearSession = (sessionId: string) => {
    const session = sessions.value.find(s => s.id === sessionId)
    if (session) {
      session.messages = []
      session.updatedAt = Date.now()
    }
  }

  const deleteSession = (sessionId: string) => {
    const index = sessions.value.findIndex(s => s.id === sessionId)
    if (index > -1) {
      sessions.value.splice(index, 1)
      if (currentSessionId.value === sessionId) {
        currentSessionId.value = sessions.value[0]?.id || ''
      }
    }
  }

  const setConnectionStatus = (status: ConnectionStatus) => {
    connectionStatus.value = status
  }

  const setTyping = (typing: boolean) => {
    isTyping.value = typing
  }

  return {
    // State
    sessions,
    currentSessionId,
    connectionStatus,
    isTyping,
    
    // Getters
    currentSession,
    currentMessages,
    
    // Actions
    createSession,
    addMessage,
    updateMessageContent,
    clearSession,
    deleteSession,
    setConnectionStatus,
    setTyping
  }
})