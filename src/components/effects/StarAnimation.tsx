import React, { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

interface StarAnimationProps {
  show: boolean
  onComplete?: () => void
}

const StarAnimation: React.FC<StarAnimationProps> = ({ show, onComplete }) => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    if (show) {
      // 生成星星
      const newStars: Star[] = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: 20 + Math.random() * 60, // 20% - 80% 范围
        y: 20 + Math.random() * 40, // 20% - 60% 范围
        size: 16 + Math.random() * 24, // 16px - 40px
        delay: Math.random() * 0.5,
        duration: 0.8 + Math.random() * 0.4
      }))
      setStars(newStars)

      // 动画完成后回调
      const timer = setTimeout(() => {
        onComplete?.()
        setStars([])
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!show || stars.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-star-burst"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="url(#starGradient)"
              className="drop-shadow-lg"
            />
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF6347" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes star-burst {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          30% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
          }
          70% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(540deg);
            opacity: 0;
          }
        }
        
        .animate-star-burst {
          animation: star-burst ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default StarAnimation
