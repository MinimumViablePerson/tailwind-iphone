import React from 'react'

export function Display ({ children }: React.PropsWithChildren) {
  return (
    <div className='bg-[url(./phone-bg.jpg)] h-full w-full bg-center bg-cover grid content-start grid-rows-[auto_auto_auto_auto_auto_1fr_auto]'>
      {children}
    </div>
  )
}
