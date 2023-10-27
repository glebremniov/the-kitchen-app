import {
  createBrowserRouter
} from 'react-router-dom'

import {
  Main,
  DefaultErrorPage
} from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: 'home',
        element: 'Home'
      },
      {
        path: 'statistics',
        element: 'Statistics'
      },
      {
        path: 'submit',
        element: 'Submit'
      },
      {
        path: 'info',
        element: 'Info'
      },
      {
        path: 'settings',
        element: 'Settings'
      },
    ]
  }
])