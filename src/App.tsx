import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [time, setTime] = useState(new Date())

  const currentTime = time
    .toLocaleTimeString()
    .split(':')
    .slice(0, -1)
    .join(':')

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='grid place-content-center h-[100vh] bg-[url(./bg-2.jpg)] bg-cover bg-center'>
      <div className='scale-[1.4] bg-black h-[147.5mm] w-[71.5mm] rounded-[2rem] overflow-hidden border-8 border-black relative grid justify-items-center text-black/60'>
        <div className='bg-black w-32 h-5 absolute rounded-b-3xl'></div>

        <div className='bg-[url(./bg.jpg)] h-full w-full bg-center bg-cover grid content-start grid-rows-[auto_auto_auto_auto_auto_1fr_auto]'>
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

          <div className='grid justify-center py-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>

          <div className='grid grid-flow-col justify-center gap-1 text-sm text-black/50'>
            Sun 13
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              />
            </svg>
            7:15
          </div>

          <div className='grid justify-center text-6xl font-semibold text-black/50'>
            {currentTime}
          </div>

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

          <div className='grid content-end p-1'>
            <div className='bg-black/40 backdrop-blur grid grid-cols-[2rem_1fr] rounded-xl'>
              <div className='p-[0.4rem]'>
                <img
                  src='./telegram-logo.png'
                  alt='telegram icon'
                  className='bg-white p-[0.1rem] rounded-md'
                />
              </div>
              <div className='text-white/80 grid content-center pr-2'>
                <p className='text-[0.5rem] flex justify-between -m-[0.1rem] items-center'>
                  <span className='font-medium'>Nicolas</span>
                  <span className='font-extralight text-[0.45rem]'>1h ago</span>
                </p>
                <p className='text-[0.5rem] -m-[0.1rem] font-light'>
                  joined Telegram!
                </p>
              </div>
            </div>
          </div>

          <div className='grid grid-flow-col justify-between px-8 pb-4 pt-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 bg-black/20 rounded-full p-1 backdrop-blur-sm'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 bg-black/20 rounded-full p-1 backdrop-blur-sm'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
              />
            </svg>
          </div>

          <div className='w-24 h-[0.2rem] bg-black/70 mx-auto my-1 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default App
