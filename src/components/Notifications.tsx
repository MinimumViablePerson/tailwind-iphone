export function Notifications () {
  return (
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
  )
}
