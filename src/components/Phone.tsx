import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Phone ({ children }: Props) {
  return (
    <div className='scale-[1.4] bg-black h-[147.5mm] w-[71.5mm] rounded-[2rem] overflow-hidden border-8 border-black relative grid justify-items-center text-black/60'>
      <div className='bg-black w-32 h-5 absolute rounded-b-3xl'></div>
      {children}
    </div>
  )
}
