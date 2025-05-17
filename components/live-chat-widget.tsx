"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! How can I help you with your accent wall project today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Simulate agent response after a delay
    setTimeout(() => {
      let responseText = ""

      if (
        message.toLowerCase().includes("price") ||
        message.toLowerCase().includes("cost") ||
        message.toLowerCase().includes("quote")
      ) {
        responseText =
          "Our accent walls typically start at $800, depending on size, materials, and complexity. Would you like me to arrange a free consultation for a custom quote?"
      } else if (message.toLowerCase().includes("time") || message.toLowerCase().includes("long")) {
        responseText =
          "Most of our accent wall installations take 1-2 days to complete. More complex projects like full fireplace build-outs may take 2-3 days."
      } else if (message.toLowerCase().includes("material") || message.toLowerCase().includes("wood")) {
        responseText =
          "We work with a variety of materials including real wood, MDF, PVC, stone veneers, and more. Would you like to learn about a specific material?"
      } else {
        responseText =
          "Thanks for your message! One of our design consultants will respond shortly. In the meantime, would you like to schedule a free in-home consultation?"
      }

      const agentMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-lg flex items-center gap-2 relative"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-5 w-5" />
          <span>Chat With Us</span>
          {!isOpen && <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"></span>}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md shadow-2xl rounded-lg bg-background border border-border overflow-hidden flex flex-col h-[450px]">
          {/* Header */}
          <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Accent Walls Pro</h3>
                <div className="flex items-center text-xs text-primary-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-muted rounded-tl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-xs mt-1 flex items-center ${
                      msg.sender === "user" ? "text-primary-foreground/70 justify-end" : "text-muted-foreground"
                    }`}
                  >
                    <Clock className="h-3 w-3 mr-1" />
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
            <div className="relative">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12"
              />
              <Button type="submit" className="absolute right-1.5 bottom-1.5" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
