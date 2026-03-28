import React, { useMemo } from 'react'
import dayjs from 'dayjs'

interface StudyCalendarProps {
  studyDates: string[] // ISO日期字符串数组
  currentStreak: number
}

const StudyCalendar: React.FC<StudyCalendarProps> = ({ studyDates, currentStreak }) => {
  // 获取当前月份数据
  const calendarData = useMemo(() => {
    const today = dayjs()
    const startOfMonth = today.startOf('month')
    const endOfMonth = today.endOf('month')
    const startDay = startOfMonth.day() // 0 = 周日
    
    const days: Array<{
      date: number
      isCurrentMonth: boolean
      isToday: boolean
      hasStudy: boolean
      isFuture: boolean
    }> = []
    
    // 上个月的日期（填充）
    for (let i = 0; i < startDay; i++) {
      days.push({
        date: startOfMonth.subtract(startDay - i, 'day').date(),
        isCurrentMonth: false,
        isToday: false,
        hasStudy: false,
        isFuture: false
      })
    }
    
    // 当前月的日期
    const daysInMonth = endOfMonth.date()
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = startOfMonth.add(i - 1, 'day')
      const dateStr = currentDate.format('YYYY-MM-DD')
      
      days.push({
        date: i,
        isCurrentMonth: true,
        isToday: currentDate.isSame(today, 'day'),
        hasStudy: studyDates.includes(dateStr),
        isFuture: currentDate.isAfter(today, 'day')
      })
    }
    
    // 下个月的日期（填充）
    const remainingDays = 42 - days.length // 6行 x 7列 = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        isToday: false,
        hasStudy: false,
        isFuture: true
      })
    }
    
    return days
  }, [studyDates])

  const weekDays = ['日', '一', '二', '三', '四', '五', '六']
  const monthName = dayjs().format('YYYY年M月')

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
          <span className="text-2xl mr-2">📅</span>
          学习日历
        </h3>
        <span className="text-sm text-gray-500">{monthName}</span>
      </div>
      
      {/* 连续学习天数 */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-orange-700 font-medium">连续学习</p>
            <p className="text-3xl font-bold text-orange-600">
              {currentStreak}<span className="text-lg">天</span>
            </p>
          </div>
          <div className="text-4xl">
            {currentStreak >= 7 ? '🔥' : currentStreak >= 3 ? '⭐' : '💪'}
          </div>
        </div>
      </div>
      
      {/* 星期标题 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-bold text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* 日期格子 */}
      <div className="grid grid-cols-7 gap-1">
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`
              aspect-square flex items-center justify-center rounded-xl text-sm font-medium
              ${!day.isCurrentMonth ? 'text-gray-300' : ''}
              ${day.isToday ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              ${day.hasStudy 
                ? 'bg-gradient-to-br from-green-400 to-green-500 text-white shadow-md transform scale-105' 
                : day.isCurrentMonth && !day.isFuture
                  ? 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  : ''
              }
              ${day.isFuture ? 'text-gray-200' : ''}
              transition-all duration-200
            `}
          >
            {day.date}
            {day.hasStudy && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white" />
            )}
          </div>
        ))}
      </div>
      
      {/* 图例 */}
      <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-md" />
          <span className="text-xs text-gray-600">已学习</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-50 border-2 border-blue-500 rounded-md" />
          <span className="text-xs text-gray-600">今天</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-50 rounded-md" />
          <span className="text-xs text-gray-600">未学习</span>
        </div>
      </div>
    </div>
  )
}

export default StudyCalendar
