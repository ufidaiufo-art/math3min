import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface CelebrationModalProps {
  show: boolean
  type: 'chapter-complete' | 'achievement' | 'level-up'
  title: string
  subtitle?: string
  chapterId?: string
  onClose: () => void
}

const CelebrationModal: React.FC<CelebrationModalProps> = ({
  show,
  type,
  title,
  subtitle,
  chapterId,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setTimeout(() => setIsVisible(true), 100)
    } else {
      setIsVisible(false)
    }
  }, [show])

  if (!show) return null

  const getIcon = () => {
    switch (type) {
      case 'chapter-complete':
        return '🏆'
      case 'achievement':
        return '🎖️'
      case 'level-up':
        return '⭐'
      default:
        return '🎉'
    }
  }

  const getGradient = () => {
    switch (type) {
      case 'chapter-complete':
        return 'from-yellow-400 via-orange-400 to-red-400'
      case 'achievement':
        return 'from-blue-400 via-purple-400 to-pink-400'
      case 'level-up':
        return 'from-green-400 via-teal-400 to-blue-400'
      default:
        return 'from-purple-400 via-pink-400 to-red-400'
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 背景遮罩 */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* 弹窗内容 */}
      <div 
        className={`relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        {/* 发光背景 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()} opacity-10 rounded-3xl`} />
        
        {/* 图标 */}
        <div className="relative text-center mb-6">
          <div className={`inline-block text-8xl animate-bounce`}>
            {getIcon()}
          </div>
          
          {/* 星星装饰 */}
          <div className="absolute top-0 left-1/4 text-2xl animate-pulse">✨</div>
          <div className="absolute top-4 right-1/4 text-xl animate-pulse" style={{ animationDelay: '0.2s' }}>✨</div>
          <div className="absolute bottom-0 left-1/3 text-lg animate-pulse" style={{ animationDelay: '0.4s' }}>⭐</div>
        </div>
        
        {/* 标题 */}
        <h2 className={`relative text-2xl font-bold text-center mb-2 bg-gradient-to-r ${getGradient()} bg-clip-text text-transparent`}>
          {title}
        </h2>
        
        {subtitle && (
          <p className="relative text-gray-600 text-center mb-6">
            {subtitle}
          </p>
        )}
        
        {/* 按钮组 */}
        <div className="relative space-y-3">
          {chapterId && (
            <Link
              to={`/practice/${chapterId}`}
              onClick={onClose}
              className={`block w-full py-4 rounded-2xl font-bold text-white text-center bg-gradient-to-r ${getGradient()} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
            >
              继续练习 📝
            </Link>
          )}
          
          <button
            onClick={onClose}
            className="block w-full py-4 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            稍后再说
          </button>
        </div>
        
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CelebrationModal
