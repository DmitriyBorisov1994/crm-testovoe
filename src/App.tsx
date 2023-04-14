import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ConfigProvider } from 'antd'
import { antDesignThemeConfig } from './utils/antDesignThemeConfig'

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={antDesignThemeConfig}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  )
}

export default App
