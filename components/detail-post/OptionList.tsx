import { deletePost } from '@/utils/fetch'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  postId: string
}

const OptionList = ({ isOpen, onClose, postId }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { replace } = useRouter()
  const { data: session } = useSession()
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

  const handleDeletePost = async () => {
    setIsLoading(true)
    try {
      const response = await deletePost(session?.user.token as string, postId)
      const data = await response?.json()

      if (!response?.ok) {
        throw new Error(data.message)
      }

      replace(`/${session?.user._id}?tab=post`)
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('Something went wrong')
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed left-0 top-0 bg-black/60 w-full h-full z-50 flex items-center justify-center">
      <div ref={ref} className="bg-[#262626] w-1/2 lg:w-1/4 flex flex-col rounded-lg">
        <button
          disabled={isLoading}
          onClick={handleDeletePost}
          className={`py-2 border-b border-b-[#E0F1FF] text-red-500 font-semibold ${
            isLoading ? 'cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
        <button className="py-2 font-semibold border-b border-b-[#E0F1FF]">Edit</button>
        <button onClick={onClose} className="py-2 font-semibold">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default OptionList
