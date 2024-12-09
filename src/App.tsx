import { BrowserRouter, NavLink } from 'react-router-dom'
import Routes, { routes } from './routes'
import { FC, Suspense } from 'react'
import { Layout, Menu, theme } from 'antd'

const { Sider, Content } = Layout

const App: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <BrowserRouter>
      <Layout style={{ height: '100%' }}>
        <Sider collapsible>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/controllable']}
            items={routes
              .filter((route) => !route.isHidden)
              .map(({ path, lable }) => ({
                key: path,
                label: <NavLink to={path}>{lable}</NavLink>
              }))}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Suspense fallback={<div>加载中...</div>}>
              <Routes />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
