import { useState, useRef, useEffect } from 'react'
import aiIcon from '../../../public/ai-icon.png'
import { motion, AnimatePresence } from 'framer-motion'
import {

  HiPaperAirplane,
  HiX,
} from 'react-icons/hi'
import { FaRobot } from 'react-icons/fa'

import aiKnowledge from '../../data/aiKnowledge.json'
import { matchIntent } from '../../utils/helpers'
import { useApp } from '../../context/AppContext'
import { RESUME_URL } from '../../constants/theme'

interface Message {
  id: number
  text: string
  isBot: boolean
}

export default function AIAssistant() {
  const { isAIChatOpen, setIsAIChatOpen } = useApp()

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: aiKnowledge.greeting,
      isBot: true,
    },
  ])

  const [input, setInput] = useState('')

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])

  const getResponse = (userInput: string): string => {
    const intent = matchIntent(userInput, aiKnowledge.keywords)

    if (intent && intent in aiKnowledge.responses) {
      return aiKnowledge.responses[
        intent as keyof typeof aiKnowledge.responses
      ]
    }

    return aiKnowledge.fallback
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.trim()

    const userMsg: Message = {
      id: Date.now(),
      text: userMessage,
      isBot: false,
    }

    const botMsg: Message = {
      id: Date.now() + 1,
      text: getResponse(userMessage),
      isBot: true,
    }

    setMessages((prev) => [...prev, userMsg, botMsg])

    setInput('')

    if (
      userMessage.toLowerCase().includes('resume') ||
      userMessage.toLowerCase().includes('cv')
    ) {
      setTimeout(() => {
        window.open(RESUME_URL, '_blank')
      }, 500)
    }
  }

  const quickActions = [
    '👋 About Me',
    '💻 Skills',
    '🚀 Projects',
    '💼 Experience',
    '🎓 Education',
    '🏆 Certificates',
    '📞 Contact',
    '📄 Resume',
  ]

  return (
    <>
      {/* Floating Button */}

     {!isAIChatOpen && (
<motion.button
  onClick={() => setIsAIChatOpen(true)}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0 }}
  className="fixed bottom-6 right-6 z-40 flex items-center justify-center"
>
  <img
    src={aiIcon}
    alt="AI Assistant"
    className="h-50 w-50 object-contain"
  />
</motion.button>
)}

     <AnimatePresence mode="wait">
        {isAIChatOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
className="
fixed
bottom-4
right-4
md:bottom-6
md:right-6
z-40
w-[calc(100vw-2rem)]
sm:w-[360px]
lg:w-[390px]
max-w-[390px]
h-[75vh]
max-h-[700px]
rounded-3xl
glass
border
border-white/10
shadow-2xl
flex
flex-col
overflow-hidden
"
          >
            {/* Header */}

          {/* Header */}
<div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-5">
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent">
      <FaRobot className="text-white text-xl" />
    </div>

    <div>
      <h3 className="font-bold text-lg">Subhalaxmi AI</h3>
      <p className="text-xs text-secondary">• AI Assistant</p>
    </div>
  </div>

  {/* Close Button */}
 <button
  onClick={() => setIsAIChatOpen(false)}
  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95"
>
  <HiX className="text-2xl text-white" />
</button>
</div>

            {/* Messages */}

           <div className="flex-1 overflow-y-auto p-4 space-y-4">

              {messages.map((msg) => (

                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isBot
                      ? 'justify-start'
                      : 'justify-end'
                  }`}
                >

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-white/5 text-white rounded-bl-md'
                        : 'bg-gradient-to-r from-primary to-accent text-white rounded-br-md'
                    }`}
                  >
                    {msg.text}
                  </div>

                </div>

              ))}

              <div ref={messagesEndRef} />

            </div>

            {/* Quick Buttons */}

            <div className="flex flex-wrap gap-2 px-4 pb-3">

              {quickActions.map((action) => (

                <button
                  key={action}
                  onClick={() => {

                    const userMsg: Message = {
                      id: Date.now(),
                      text: action,
                      isBot: false,
                    }

                    const botMsg: Message = {
                      id: Date.now() + 1,
                      text: getResponse(action),
                      isBot: true,
                    }

                    setMessages((prev) => [
                      ...prev,
                      userMsg,
                      botMsg,
                    ])

                    if (
                      action.toLowerCase().includes(
                        'resume'
                      )
                    ) {
                      setTimeout(() => {
                        window.open(
                          RESUME_URL,
                          '_blank'
                        )
                      }, 500)
                    }
                  }}
                  className="rounded-full border border-primary/20 bg-white/5 px-3 py-2 text-xs text-white/80 transition hover:border-primary hover:bg-primary/10"
                >
                  {action}
                </button>

              ))}

            </div>

            {/* Input */}

            <div className="flex gap-2 border-t border-white/10 p-4">

              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === 'Enter' &&
                  handleSend()
                }
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-gradient-to-r from-primary to-accent p-3 transition hover:scale-105"
              >

                <HiPaperAirplane className="text-white text-lg" />

              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}