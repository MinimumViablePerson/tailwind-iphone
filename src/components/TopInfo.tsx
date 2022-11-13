export function TopInfo () {
  return (
    <div className='grid pt-2 px-2 grid-flow-col justify-between'>
      <span className='text-[0.6rem] font-medium'>EE WiFiCall</span>
      <span className='grid gap-[0.1rem] justify-items-center'>
        <div className='grid grid-flow-col gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            strokeWidth={0.1}
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z'
            />
          </svg>
        </div>
        <div className='w-8 h-[0.1rem] rounded-lg bg-black/20' />
      </span>
    </div>
  )
}
