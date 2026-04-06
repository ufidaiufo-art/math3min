import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout'
import { Loading } from '@components/common/Loading'

/**
 * ==================== 路由配置说明 ====================
 * 
 * 本应用使用 React Router v6 进行路由管理
 * 页面组件采用懒加载（Lazy Loading）优化首屏加载性能
 * 
 * 路由结构：
 * /                    - 首页（知识地图）
 * /chapter/:chapterId  - 章节详情页
 * /video/:chapterId    - 视频学习页
 * /practice/:chapterId - 练习页
 * /result              - 练习结果页
 * /report              - 学习报告页（AI诊断）
 * /profile             - 个人中心
 * /notes               - 知识点笔记（可带章节参数）
 * /notes/:chapterId    - 指定章节的知识点笔记
 * /wrong-book          - 错题本
 * /login               - 登录页（独立布局）
 * *                    - 404页面
 * 
 * 布局说明：
 * - 大部分页面使用 Layout 组件（包含底部导航栏）
 * - /login 页面不使用 Layout（独立页面）
 */

// ==================== 懒加载页面组件 ====================
// 使用 React.lazy 实现按需加载，减少首屏 bundle 体积

/** 首页 - 知识地图、学习统计、章节列表 */
const Home = React.lazy(() => import('@pages/Home'))

/** 章节详情页 - 展示章节信息、开始学习入口 */
const Chapter = React.lazy(() => import('@pages/Chapter'))

/** 视频学习页 - 播放教学视频、记录观看进度 */
const Video = React.lazy(() => import('@pages/Video'))

/** 练习页 - 答题、查看解析、记录正确率 */
const Practice = React.lazy(() => import('@pages/Practice'))

/** 练习结果页 - 展示答题结果、得分统计 */
const Result = React.lazy(() => import('@pages/Result'))

/** 学习报告页 - AI诊断、能力分析、薄弱点识别 */
const Report = React.lazy(() => import('@pages/ReportPage'))

/** 个人中心页 - 用户信息、成就、设置 */
const Profile = React.lazy(() => import('@pages/Profile'))

/** 知识点笔记页 - 各章节知识点汇总 */
const Notes = React.lazy(() => import('@pages/Notes'))

/** 错题本页 - 错题回顾、已掌握标记 */
import WrongBook from '@pages/WrongBook'

/** 登录页 - 用户登录（独立布局） */
const Login = React.lazy(() => import('@pages/Login'))

/** 404页面 - 路由不匹配时显示 */
const NotFound = React.lazy(() => import('@pages/NotFound'))

/**
 * 应用主组件
 * 配置所有路由规则，使用 Suspense 处理懒加载的加载状态
 */
function App() {
  return (
    <Suspense fallback={<Loading fullScreen />}>
      <Routes>
        {/* 主布局路由 - 包含底部导航栏 */}
        <Route path="/" element={<Layout />}>
          {/* 首页 - 默认路由 */}
          <Route index element={<Home />} />
          
          {/* 章节相关路由 */}
          <Route path="chapter/:chapterId" element={<Chapter />} />
          <Route path="video/:chapterId" element={<Video />} />
          <Route path="practice/:chapterId" element={<Practice />} />
          
          {/* 结果与报告 */}
          <Route path="result" element={<Result />} />
          <Route path="report" element={<Report />} />
          
          {/* 用户相关 */}
          <Route path="profile" element={<Profile />} />
          
          {/* 学习工具 */}
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:chapterId" element={<Notes />} />
          <Route path="wrong-book" element={<WrongBook />} />
        </Route>
        
        {/* 独立页面（无布局） */}
        <Route path="/login" element={<Login />} />
        
        {/* 404 页面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
