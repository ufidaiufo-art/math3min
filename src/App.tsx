import React, { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { Layout } from '@components/layout'
import { Loading } from '@components/common/Loading'
import { DEFAULT_GRADE_ID, isSupportedGradeId } from '@features/curriculum'

const Home = React.lazy(() => import('@pages/Home'))
const Chapter = React.lazy(() => import('@pages/Chapter'))
const Video = React.lazy(() => import('@pages/Video'))
const Practice = React.lazy(() => import('@pages/Practice'))
const Result = React.lazy(() => import('@pages/Result'))
const Report = React.lazy(() => import('@pages/ReportPage'))
const Profile = React.lazy(() => import('@pages/Profile'))
const Notes = React.lazy(() => import('@pages/Notes'))
const WrongBook = React.lazy(() => import('@pages/WrongBook'))
const Login = React.lazy(() => import('@pages/Login'))
const NotFound = React.lazy(() => import('@pages/NotFound'))

function GradeLayoutGuard() {
  const { gradeId } = useParams<{ gradeId: string }>()

  if (!isSupportedGradeId(gradeId)) {
    return <Navigate to={`/${DEFAULT_GRADE_ID}`} replace />
  }

  return <Layout />
}

function LegacyGradeRedirect() {
  const location = useLocation()
  return <Navigate to={`/${DEFAULT_GRADE_ID}${location.pathname}`} replace />
}

function App() {
  return (
    <Suspense fallback={<Loading fullScreen />}>
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_GRADE_ID}`} replace />} />

        <Route path="/:gradeId" element={<GradeLayoutGuard />}>
          <Route index element={<Home />} />
          <Route path="chapter/:chapterId" element={<Chapter />} />
          <Route path="video/:chapterId" element={<Video />} />
          <Route path="practice/:chapterId" element={<Practice />} />
          <Route path="result" element={<Result />} />
          <Route path="report" element={<Report />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:chapterId" element={<Notes />} />
          <Route path="wrong-book" element={<WrongBook />} />
        </Route>

        <Route path="/chapter/:chapterId" element={<LegacyGradeRedirect />} />
        <Route path="/video/:chapterId" element={<LegacyGradeRedirect />} />
        <Route path="/practice/:chapterId" element={<LegacyGradeRedirect />} />
        <Route path="/result" element={<LegacyGradeRedirect />} />
        <Route path="/report" element={<LegacyGradeRedirect />} />
        <Route path="/profile" element={<LegacyGradeRedirect />} />
        <Route path="/notes" element={<LegacyGradeRedirect />} />
        <Route path="/notes/:chapterId" element={<LegacyGradeRedirect />} />
        <Route path="/wrong-book" element={<LegacyGradeRedirect />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
