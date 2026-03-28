import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-8xl mb-4">😕</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">页面不存在</h1>
      <p className="text-gray-500 mb-8">抱歉，您访问的页面走丢了</p>
      <Link 
        to="/"
        className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors"
      >
        返回首页
      </Link>
    </div>
  )
}

export default NotFound
