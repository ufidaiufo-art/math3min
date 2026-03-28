import React, { useState } from 'react'
import { useProgressStore } from '../../stores'
import { Link } from 'react-router-dom'

const Profile: React.FC = () => {
  const { 
    totalStudyTime, 
    totalQuestions, 
    correctCount, 
    getCorrectRate, 
    studyStreak,
    achievements,
    exportData,
    importData,
    resetProgress
  } = useProgressStore()
  
  const correctRate = getCorrectRate()
  const [showExportModal, setShowExportModal] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)
  const [exportCode, setExportCode] = useState('')
  const [importCode, setImportCode] = useState('')
  const [importMessage, setImportMessage] = useState('')
  
  // 所有可能的徽章
  const allBadges = [
    { id: 'streak_7', icon: '🔥', name: '连续7天', bg: 'bg-red-100', color: 'text-red-600' },
    { id: 'questions_100', icon: '🎯', name: '百题斩', bg: 'bg-blue-100', color: 'text-blue-600' },
    { id: 'master', icon: '⭐', name: '小学霸', bg: 'bg-yellow-100', color: 'text-yellow-600' },
    { id: 'first_complete', icon: '🏆', name: '初出茅庐', bg: 'bg-purple-100', color: 'text-purple-600' },
    { id: 'perfect_score', icon: '💯', name: '满分达成', bg: 'bg-green-100', color: 'text-green-600' },
    { id: 'improve', icon: '🚀', name: '进步之星', bg: 'bg-pink-100', color: 'text-pink-600' },
    { id: 'knowledge', icon: '📚', name: '知识达人', bg: 'bg-indigo-100', color: 'text-indigo-600' },
    { id: 'lightning', icon: '⚡', name: '闪电答题', bg: 'bg-orange-100', color: 'text-orange-600' },
  ]
  
  const handleExport = () => {
    const code = exportData()
    setExportCode(code)
    setShowExportModal(true)
  }
  
  const handleImport = () => {
    if (!importCode.trim()) {
      setImportMessage('请输入同步码')
      return
    }
    const success = importData(importCode.trim())
    if (success) {
      setImportMessage('✅ 数据导入成功！')
      setTimeout(() => {
        setShowImportModal(false)
        setImportCode('')
        setImportMessage('')
        window.location.reload()
      }, 1500)
    } else {
      setImportMessage('❌ 同步码无效，请检查后再试')
    }
  }
  
  const handleReset = () => {
    if (confirm('确定要重置所有学习进度吗？此操作不可恢复！')) {
      resetProgress()
      window.location.reload()
    }
  }
  
  // 计算本周学习情况
  const weekDays = ['一', '二', '三', '四', '五', '六', '日']
  const today = new Date().getDay() || 7
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部用户信息 */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-6 rounded-b-[2.5rem]">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="p-2 -ml-2 hover:bg-white/10 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </Link>
          <h1 className="text-lg font-bold">个人中心</h1>
          <div className="w-10" />
        </div>
        
        <div className="flex items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
              <span className="text-4xl">👦</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg border-2 border-white">
              👑
            </div>
          </div>
          <div className="ml-5">
            <h2 className="text-2xl font-bold">宣宣同学</h2>
            <p className="text-white/80 text-sm">初一 • 数学学习者</p>
            <div className="flex items-center mt-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center">
                <span className="text-lg mr-1">💎</span>
                <span className="font-bold">{totalQuestions * 10 + correctCount * 5}</span>
                <span className="ml-1">积分</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* 连续学习 */}
        <div className="mt-6 flex items-center justify-between bg-white/10 rounded-2xl p-4">
          <div className="text-center min-w-[80px]">
            <p className="text-3xl font-bold">{studyStreak}</p>
            <p className="text-xs text-white/70">连续学习(天)</p>
          </div>
          <div className="flex-1 mx-4">
            <div className="flex space-x-1">
              {weekDays.map((day, i) => (
                <div 
                  key={day} 
                  className={`flex-1 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                    i < today - 1 ? 'bg-green-400 text-white' : 'bg-white/20 text-white/50'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="p-4">
        {/* 学习统计 */}
        <div className="bg-white rounded-3xl p-5 shadow-lg mb-4">
          <h3 className="font-bold text-gray-800 mb-4 text-lg">📊 学习统计</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-2xl">
              <p className="text-2xl font-bold text-blue-600">{(totalStudyTime / 60).toFixed(1)}</p>
              <p className="text-xs text-gray-600 mt-1">总学习时长(h)</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-2xl">
              <p className="text-2xl font-bold text-green-600">{totalQuestions}</p>
              <p className="text-xs text-gray-600 mt-1">做题总数</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-2xl">
              <p className="text-2xl font-bold text-orange-600">{correctRate}%</p>
              <p className="text-xs text-gray-600 mt-1">正确率</p>
            </div>
          </div>
        </div>

        {/* 徽章墙 */}
        <div className="bg-white rounded-3xl p-5 shadow-lg mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800 text-lg">🏅 徽章墙</h3>
            <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-bold">
              {achievements.length}/{allBadges.length}
            </span>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {allBadges.map((badge) => {
              const unlocked = achievements.includes(badge.id)
              return (
                <div key={badge.id} className="text-center">
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-2 shadow-sm transition-all ${
                    unlocked ? badge.bg : 'bg-gray-100'
                  }`}>
                    <span className={unlocked ? '' : 'grayscale opacity-50'}>
                      {unlocked ? badge.icon : '🔒'}
                    </span>
                  </div>
                  <p className={`text-xs ${unlocked ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
                    {badge.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* 数据同步功能 */}
        <div className="bg-white rounded-3xl p-5 shadow-lg mb-4">
          <h3 className="font-bold text-gray-800 mb-4 text-lg">☁️ 数据同步</h3>
          <p className="text-sm text-gray-500 mb-4">
            在另一台设备上学习？导出同步码，在新设备上导入即可继续学习！
          </p>
          <div className="flex gap-3">
            <button 
              onClick={handleExport}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-bold text-base active:scale-95 transition-transform"
            >
              📤 导出数据
            </button>
            <button 
              onClick={() => setShowImportModal(true)}
              className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl font-bold text-base active:scale-95 transition-transform"
            >
              📥 导入数据
            </button>
          </div>
        </div>

        {/* 功能菜单 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <button 
            onClick={handleReset}
            className="w-full flex items-center justify-between p-4 hover:bg-red-50 border-b border-gray-100"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">🔄</span>
              <span className="text-red-600 font-medium">重置所有进度</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* 版本信息 */}
        <div className="text-center mt-6 text-xs text-gray-400">
          <p>数学三分钟 v1.0.0</p>
          <p className="mt-1">Made with ❤️ for Math Learners</p>
        </div>
      </main>
      
      {/* 导出弹窗 */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg mb-2">📤 导出同步码</h3>
            <p className="text-sm text-gray-500 mb-4">复制下面的代码，在新设备上导入即可</p>
            <div className="bg-gray-100 rounded-xl p-3 mb-4">
              <textarea 
                readOnly
                value={exportCode}
                className="w-full bg-transparent text-xs break-all resize-none outline-none"
                rows={4}
              />
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(exportCode)
                alert('已复制到剪贴板！')
              }}
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold mb-2"
            >
              📋 复制同步码
            </button>
            <button 
              onClick={() => setShowExportModal(false)}
              className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-bold"
            >
              关闭
            </button>
          </div>
        </div>
      )}
      
      {/* 导入弹窗 */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-lg mb-2">📥 导入同步码</h3>
            <p className="text-sm text-gray-500 mb-4">粘贴之前导出的同步码</p>
            <textarea 
              value={importCode}
              onChange={(e) => setImportCode(e.target.value)}
              placeholder="在此粘贴同步码..."
              className="w-full bg-gray-100 rounded-xl p-3 text-sm mb-4 outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            />
            {importMessage && (
              <p className={`text-sm mb-4 ${importMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {importMessage}
              </p>
            )}
            <button 
              onClick={handleImport}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold mb-2"
            >
              ✓ 确认导入
            </button>
            <button 
              onClick={() => {
                setShowImportModal(false)
                setImportCode('')
                setImportMessage('')
              }}
              className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-bold"
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
