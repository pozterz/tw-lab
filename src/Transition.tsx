
export const Transition = () => {
  return (
    <div className='container mx-auto mt-4'>
      <div className='grid grid-cols-6 gap-4'>
        <div
          className='transition duration-500 bg-red-400 rounded text-white p-4 text-center hover:bg-red-600'
        >
          Hover
        </div>

        <div
          className='transition duration-500 ease-in-out bg-red-400 rounded text-white p-4 text-center hover:bg-red-600 hover:scale-110 transform '
        >
          Hover
        </div>

        <div className='bg-red-400 rounded text-white p-4 text-center flex leading-loose'>
          <img className='animate-spin w-6' src='/loading.svg' />
          <span>Hover</span>
        </div>

        <img className='animate-ping w-8' src='/danger.png' />
      </div>
    </div>
  )
}
