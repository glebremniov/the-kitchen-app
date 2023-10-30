import { Navigation } from '../../../widgets'
import { Card } from '../../../temp'
import { Outlet } from 'react-router-dom'
import { SpinLoader, DMYTabGroup } from '../../../shared'

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

        <DMYTabGroup
          day={(
            <ul>
              <li>1. Per Day</li>
              <li>2. Per Day</li>
              <li>3. Per Day</li>
            </ul>
          )}
          month={(
            <ul>
              <li>1. Per Month</li>
              <li>2. Per Month</li>
              <li>3. Per Month</li>
            </ul>
          )}
          year={(
            <ul>
              <li>1. Per Year</li>
              <li>2. Per Year</li>
              <li>3. Per Year</li>
            </ul>
          )}
        />
        <Card />
      </div>
    </>
  )
}