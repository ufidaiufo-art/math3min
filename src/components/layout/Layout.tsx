import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { TabBar } from './TabBar'

export const Layout: React.FC = () => {
  const location = useLocation()
  const hideTabBar = location.pathname === '/wrong-book'

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-lg relative">
      <main className={hideTabBar ? '' : 'pb-20'}>
        <Outlet />
      </main>
      {!hideTabBar && <TabBar />}
    </div>
  )
}
