import React, { useEffect, useState } from 'react'

interface Confetti {
  id: number
  x: number
  y: number
  color: string
  size: number
  rotation: number
  delay: number
  duration: number
  shape: 'circle' | 'square' | 'triangle'
}

interface ConfettiEffectProps {
  show: boolean
  onComplete?: () => void
}

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
  '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#F8B500', '#6C5CE7', '#A29BFE', '#FD79A8'
]

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ show, onComplete }) => {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    if (show) {
      // 生成彩带
      const newConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // 0% - 100% 随机位置
        y: -10 - Math.random() * 20, // 从屏幕上方开始
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 12, // 8px - 20px
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2, // 3-5秒下落时间
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as Confetti['shape']
      }))
      setConfetti(newConfetti)

      // 动画完成后回调
      const timer = setTimeout(() => {
        onComplete?.()
        setConfetti([])
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!show || confetti.length === 0) return null

  const renderShape = (shape: Confetti['shape'], color: string, size: number) => {
    switch (shape) {
      case 'circle':
        return (
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: '50%'
            }}
          />
        )
      case 'square':
        return (
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: color
            }}
          />
        )
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `rotate(${item.rotation}deg)`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`
          }}
        >
          {renderShape(item.shape, item.color, item.size)}
        </div>
      ))}
      
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }
      `}</style>
    </div>
  )
}

export default ConfettiEffect
