import { Navigation } from '../../../widgets'
import { Card } from '../../../temp'
import { Outlet } from 'react-router-dom'
import { TabGroup } from '../../../temp/TabGroup'
import { SpinLoader } from '../../../shared'

export const Main = () => {

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-5">
        <h1 className='text-2xl'>
          <Outlet />
        </h1>

        <div className='flex items-center justify-center'>
          <SpinLoader />
        </div>

        <TabGroup />
        <Card />
      </div>
    </>
  )
}