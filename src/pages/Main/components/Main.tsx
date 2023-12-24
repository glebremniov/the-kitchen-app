import { Header, Navigation } from '../../../widgets'
import { Outlet } from 'react-router-dom'

export const Main = () => {

  return (
    <>
      <Navigation />
      <div>
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </>
  )
}