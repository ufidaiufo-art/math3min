import React, { useEffect, useState } from 'react'

interface UnlockEffectProps {
  show: boolean
  onComplete?: () => void
  chapterName?: string
}

const UnlockEffect: React.FC<UnlockEffectProps> = ({ show, onComplete, chapterName }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showGlow, setShowGlow] = useState(false)

  useEffect(() => {
    if (show) {
      setIsAnimating(true)
      setShowGlow(true)
      
      // 动画完成后回调
      const timer = setTimeout(() => {
        setIsAnimating(false)
        onComplete?.()
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* 背景发光效果 */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-orange-300/30 to-purple-300/30 transition-opacity duration-1000 ${
          showGlow ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* 中心内容 */}
      <div className="relative flex flex-col items-center">
        {/* 破碎的锁动画 */}
        <div className="relative mb-6">
          {/* 主锁图标 */}
          <div 
            className={`text-9xl transition-all duration-700 ${
              isAnimating ? 'scale-110' : 'scale-100'
            }`}
            style={{
              animation: isAnimating ? 'lock-shake 0.5s ease-in-out 3' : 'none'
            }}
          >
            {isAnimating ? '🔓' : '🔒'}
          </div>
          
          {/* 破碎效果 */}
          {isAnimating && (
            <>
              <div className="absolute top-0 left-1/4 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💥</div>
              <div className="absolute top-4 right-1/4 text-3xl animate-bounce" style={{ animationDelay: '0.7s' }}>✨</div>
              <div className="absolute bottom-0 left-1/3 text-2xl animate-bounce" style={{ animationDelay: '0.9s' }}>⭐</div>
            </>
          )}
        </div>
        
        {/* 文字提示 */}
        <div 
          className={`text-center transition-all duration-700 transform ${
            isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
            🎉 新章节解锁！
          </h2>
          {chapterName && (
            <p className="text-xl text-gray-700 font-medium">
              {chapterName}
            </p>
          )}
        </div>
        
        {/* 光芒射线 */}
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-t from-yellow-400 to-transparent origin-bottom animate-ray"
                style={{
                  height: '200px',
                  transform: `rotate(${i * 45}deg) translateY(-100px)`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes lock-shake {
          0%, 100% { transform: rotate(0deg) scale(1.1); }
          25% { transform: rotate(-5deg) scale(1.1); }
          75% { transform: rotate(5deg) scale(1.1); }
        }
        
        @keyframes ray {
          0% {
            opacity: 0;
            transform: rotate(var(--rotation, 0deg)) translateY(-100px) scaleY(0);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) translateY(-100px) scaleY(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation, 0deg)) translateY(-100px) scaleY(0);
          }
        }
        
        .animate-ray {
          animation: ray 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default UnlockEffect
