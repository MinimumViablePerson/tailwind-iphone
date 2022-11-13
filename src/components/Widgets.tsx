export function Widgets () {
  return (
    <div className='grid grid-flow-col text-[0.6rem] gap-4 px-4 py-2 text-black/60'>
      <div>
        <p className='font-medium'>Calendar</p>
        <p className='font-light'>No upcoming events</p>
      </div>

      <div>
        <p className='flex items-center gap-1 font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='inherit'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-3 h-3 opacity-60'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'
            />
          </svg>
          12°
        </p>
        <p className='font-light'>Partly cloudy</p>
        <p className='font-normal text-black/40'>H:14° L:10°</p>
      </div>
    </div>
  )
}
