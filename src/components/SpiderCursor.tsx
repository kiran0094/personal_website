import { useEffect, useState } from 'react'

export default function SpiderCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleDown = () => setIsClicking(true)
    const handleUp = () => setIsClicking(false)
    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none rounded-full border transition-transform duration-150 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          borderColor: isClicking
            ? 'hsl(0 80% 50% / 0.8)'
            : 'hsl(0 80% 50% / 0.3)',
          transform: isClicking ? 'scale(1.5)' : 'scale(1)',
          zIndex: 9999,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none rounded-full"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          background: isClicking
            ? 'hsl(0 100% 65%)'
            : 'hsl(0 80% 50%)',
          boxShadow: isClicking
            ? '0 0 20px hsl(0 100% 65% / 0.8), 0 0 40px hsl(0 100% 65% / 0.4)'
            : '0 0 10px hsl(0 80% 50% / 0.5)',
          zIndex: 9999,
        }}
      />
    </>
  )
}
