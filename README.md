# 数学三分钟 (Math3Min)

初一数学学习H5应用 - 3分钟短视频 + AI诊断 + 游戏化学习

## 技术栈

- React 18 + TypeScript
- Vite 5 (构建工具)
- React Router v6 (路由)
- Zustand (状态管理)
- Tailwind CSS (样式)
- DPlayer (视频播放)

## 功能模块

- ✅ 知识地图（章节导航）
- ✅ 视频学习（3分钟微课）
- ✅ 智能练习（自适应题库）
- ✅ AI诊断报告
- ✅ 学习统计
- ✅ 徽章系统
- ✅ 积分系统

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
src/
├── api/          # API接口
├── assets/       # 静态资源
├── components/   # 组件
├── constants/    # 常量
├── hooks/        # 自定义Hooks
├── pages/        # 页面
├── stores/       # 状态管理
├── types/        # TypeScript类型
└── utils/        # 工具函数
```

## 开发规范

- 使用函数式组件 + Hooks
- 类型安全：所有props和API响应都定义类型
- 状态管理：使用Zustand，按功能模块拆分store
- 样式：使用Tailwind CSS，自定义主题色primary #5B7CF9
