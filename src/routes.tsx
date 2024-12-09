import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

// 使用 React.lazy 按需加载组件
const Controllable = lazy(() => import('@/pages/controllable/index'))
const UseInterval = lazy(() => import('@/pages/use-interval/index'))
const Calendar = lazy(() => import('@/pages/calendar/index'))

export const routes = [
  {
    path: '/',
    element: <Navigate to="/controllable" replace />,
    isHidden: true
  },
  { path: '/controllable', lable: '受控与非受控', element: <Controllable /> },
  { path: '/use-interval', lable: '定时器', element: <UseInterval /> },
  { path: '/calendar', lable: '日历组件', element: <Calendar /> }
]

const AppRoutes = () => {
  return useRoutes(routes.filter((route) => !route.isHidden))
}

export default AppRoutes
