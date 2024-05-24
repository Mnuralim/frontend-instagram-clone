import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { MdCloudUpload } from 'react-icons/md'
import { MdOutlineLocationOn } from 'react-icons/md'
import { GoPerson } from 'react-icons/go'
import { MdArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import ButtonBack from '../ButtonBack'
import { createPost } from '@/utils/fetch'
import { useApppContext } from '@/store/context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePost } from '@/utils/swr'

const MainCreatePost = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null)
  const [imagePost, setImagePost] = useState<any>(null)
  const [video, setVideo] = useState<string | ArrayBuffer | null>(null)
  const [videoPost, setVideoPost] = useState<any>(null)
  const [caption, setCaption] = useState<string>('')
  const [type, setType] = useState<string>('')
  const { dispatch } = useApppContext()
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user
  const { mutate, isLoading } = usePost(user?.token as string)
  const overLay = useRef<HTMLElement>(null)

  useEffect(() => {
    document.body.classList.add('modal-open')

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  const backButton: MouseEventHandler = (e) => {
    if (e.target === overLay.current) {
      router.back()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size > 5000000) {
      toast.error('Maximum file size is 5mb', {
        position: toast.POSITION.TOP_RIGHT,
      })
      return
    }
    if (file) {
      const reader = new FileReader()

      if (file.type.includes('image')) {
        setImagePost(file)
        setVideoPost(null)
        setType('post')
        reader.onloadend = () => {
          setImage(reader.result)
          setVideo(null)
        }
        reader.readAsDataURL(file)
      } else {
        setVideoPost(file)
        setImagePost(null)
        setType('reel')
        reader.onloadend = () => {
          setVideo(reader.result)
          setImage(null)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('type', type)
    formData.append('media', type == 'post' ? imagePost : videoPost)

    dispatch({
      type: 'UPDATE_LOADING_UPLOAD',
      option: {
        loading: true,
        media: type == 'post' ? (image as string) : (video as string),
        type: type,
      },
    })

    router.push('/')

    try {
      const response = await createPost(user?.token as string, formData)

      if (response?.ok) {
        dispatch({
          type: 'UPDATE_LOADING_UPLOAD',
          option: {
            loading: false,
            media: '',
            type: '',
          },
        })
        mutate()
      } else {
        toast.error('Failed to create post', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error) {
      throw new Error('error')
    }
  }

  return (
    <section
      ref={overLay}
      onClick={backButton}
      className="fixed bg-black inset-0 top-0 left-0 z-50 flex justify-center items-center md:bg-opacity-50"
    >
      <div className="absolute right-4 top-4 hidden md:block">
        <AiOutlineClose
          name="button-back"
          onClick={() => router.back()}
          size="23"
          color="#fff"
          className="cursor-pointer"
        />
      </div>
      <div className="w-full h-full md:h-auto md:aspect-[4/3] z-10 bg-black md:rounded-xl lg:max-w-[30%] md:max-w-[55%] md:bg-[#262626]">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center pt-4 px-3">
            <div className="w-5">
              <span className="md:hidden">
                <ButtonBack />
              </span>
            </div>
            <h2 className="font-semibold ml-4">New Post</h2>
            <button name="button-submit" type="submit" className="text-sm text-indigo-800 font-semibold">
              Share
            </button>
          </div>
          <div className=" flex justify-between items-center  gap-3 w-full px-3 py-4 mt-4">
            <Image
              src={user?.image as string}
              alt={'test'}
              width={100}
              height={100}
              className="object-cover rounded-full bg-blue-400 w-8 h-8"
            />
            <div className="w-full items-center flex">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Write a caption..."
                  className="w-full outline-none  py-1 bg-transparent text-sm"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="postFile" className="cursor-pointer">
                  {image ? (
                    <Image src={image.toString()} alt="" width={100} height={100} className="object-cover w-10 h-10" />
                  ) : video ? (
                    <video
                      muted
                      loop
                      autoPlay
                      src={video.toString()}
                      width={100}
                      height={100}
                      className="object-cover w-10 h-10"
                    />
                  ) : (
                    <MdCloudUpload className="text-3xl text-blue-700" />
                  )}
                </label>
                <input
                  onChange={handleFileChange}
                  accept="image/*, video/*"
                  type="file"
                  name="postFile"
                  id="postFile"
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-b border-t border-white border-opacity-20">
            <div className="flex items-center gap-2">
              <MdOutlineLocationOn size="21" className="text-[#a6a6a6] md:text-white" />
              <h3>Add location</h3>
            </div>
            <MdArrowForwardIos />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-b border-white border-opacity-20">
            <div className="flex items-center gap-2">
              <GoPerson size="21" className="text-[#a6a6a6] md:text-white" />
              <h3>Tag people</h3>
            </div>
            <MdArrowForwardIos />
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default MainCreatePost
