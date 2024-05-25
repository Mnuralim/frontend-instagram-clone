import { signOut } from 'next-auth/react'
import React, { useEffect, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalOptions = ({ isOpen, onClose }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed left-0 top-0 bg-black/60 w-full h-full z-50 flex items-center justify-center">
      <div ref={ref} className="bg-[#262626] w-1/2 lg:w-1/4 flex flex-col rounded-lg">
        <button onClick={() => signOut()} className="py-2 border-b border-b-[#E0F1FF] font-semibold">
          Log Out
        </button>
        <button onClick={onClose} className="py-2 font-semibold text-red-500">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalOptions
