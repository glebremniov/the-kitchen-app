import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export const DefaultErrorPage = () => {
  const error = useRouteError() as Error
  console.error(error)

  if (!isRouteErrorResponse(error)) {
    return null
  }

  return (
    <div id="error-page" className='p-5'>
      <div
        className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert">
        <div className="flex items-center">
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a danger alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          {error.message || error.statusText}
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            На главную
          </button>
        </div>
      </div>
    </div>
  )
}