import { useState, useEffect } from 'react'

export function Time () {
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
    <div className='grid justify-center text-6xl font-semibold text-black/50'>
      {currentTime}
    </div>
  )
}
