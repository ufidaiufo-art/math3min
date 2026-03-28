import React from 'react'

interface LoadingProps {
  fullScreen?: boolean
}

export const Loading: React.FC<LoadingProps> = ({ fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-500 text-sm">加载中...</p>
    </div>
  )
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50">
        {content}
      </div>
    )
  }
  
  return <div className="py-10">{content}</div>
}
