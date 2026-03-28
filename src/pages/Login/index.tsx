import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📐</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">数学三分钟</h1>
          <p className="text-gray-500 mt-2">3分钟短视频 + AI诊断 + 游戏化学习</p>
        </div>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="请输入手机号"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
          />
          <div className="flex space-x-3">
            <input 
              type="text" 
              placeholder="验证码"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
            />
            <button className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium whitespace-nowrap">
              获取验证码
            </button>
          </div>
          
          <button className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
            登录 / 注册
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">登录即表示同意《用户协议》和《隐私政策》</p>
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
            微
          </button>
          <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
            Q
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
