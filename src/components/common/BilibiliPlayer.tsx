import React, { useState, useEffect, useRef } from 'react'

interface BilibiliPlayerProps {
  bvid?: string
  videoUrl?: string
  page?: number // 分P号（从1开始）
  onComplete?: () => void
  onProgress?: (progress: number) => void
}

/**
 * B站视频播放器组件
 * 支持通过BV号或完整视频URL嵌入B站视频
 */
const BilibiliPlayer: React.FC<BilibiliPlayerProps> = ({
  bvid,
  videoUrl,
  page = 1,
  onComplete,
  onProgress
}) => {
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 构建嵌入URL
  const getEmbedUrl = () => {
    if (videoUrl) return videoUrl
    if (bvid) return `//player.bilibili.com/player.html?bvid=${bvid}&page=${page}&high_quality=1&danmaku=0`
    return null
  }

  const embedUrl = getEmbedUrl()

  // 监听视频进度（通过postMessage与B站播放器通信）
  useEffect(() => {
    if (!embedUrl) return

    const handleMessage = (event: MessageEvent) => {
      // B站播放器会发送播放进度事件
      if (event.data && typeof event.data === 'object') {
        // 处理B站播放器消息
        if (event.data.progress) {
          onProgress?.(event.data.progress)
        }
        if (event.data.event === 'ended') {
          onComplete?.()
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [embedUrl, onComplete, onProgress])

  // 如果没有视频链接，显示占位符
  if (!embedUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <div className="text-4xl mb-4">📚</div>
          <p className="text-lg font-medium">暂无视频讲解</p>
          <p className="text-sm text-gray-400 mt-2">请查看下方图文内容学习</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      {!isReady && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-sm">加载视频中...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center text-white px-4">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-lg font-medium">视频加载失败</p>
            <p className="text-sm text-gray-400 mt-2">请检查网络连接或刷新页面</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
            >
              刷新页面
            </button>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={embedUrl}
        className="w-full h-full border-0"
        allow="autoplay; fullscreen"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups"
        onLoad={() => setIsReady(true)}
        onError={() => setHasError(true)}
        title="B站视频"
      />
    </div>
  )
}

export default BilibiliPlayer
