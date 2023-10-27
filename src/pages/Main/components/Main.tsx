import { Navigation } from '../../../widgets'
import { Card } from '../../../temp'
import { Outlet } from 'react-router-dom'
import { TabGroup } from '../../../temp/TabGroup'

export const Main = () => {

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-5">
        <h1 className='text-2xl'>
          <Outlet />
        </h1>
        <TabGroup />
        <Card />
      </div>
    </>
  )
}