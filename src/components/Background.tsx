import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Background ({ children }: Props) {
  return (
    <div className='grid place-content-center h-[100vh] bg-[url(./os-bg.jpeg)] bg-cover bg-center'>
      {children}
    </div>
  )
}
