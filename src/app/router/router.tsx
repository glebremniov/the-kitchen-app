import {
  createBrowserRouter
} from 'react-router-dom'

import {
  Main,
  DefaultErrorPage,
  ReceiptPage
} from '../../pages'
import { Card } from '../../temp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        path: 'home',
        element: <ReceiptPage />
      },
      {
        path: 'statistics',
        element: <Card />
      },
      {
        path: 'submit',
        element: <Card />
      },
      {
        path: 'info',
        element: <Card />
      },
      {
        path: 'settings',
        element: <Card />
      },
    ]
  }
])