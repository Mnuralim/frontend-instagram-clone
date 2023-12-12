import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Comment } from '../detail-post/Comment'

const DetailPostSkeleton = () => {
  return (
    <section className="fixed bg-black inset-0 top-0 left-0 z-50 flex justify-center items-center md:bg-opacity-50">
      <div className="absolute right-4 top-4 hidden md:block">
        <div className="bg-gray-500 w-6 h-6 animate-pulse rounded-md"></div>
      </div>
      <div className="w-full h-full z-10 relative grid grid-cols-1 md:p-6 md:max-w-[78%] md:grid-cols-2">
        <div className={`hidden md:block overflow-hidden bg-black`}>
          <div className="w-full h-full bg-gray-500 animate-pulse rounded"></div>
        </div>
        <div className="bg-[#262626] border-slate-50/25 overflow-y-auto no-scrollbar pb-28 md:bg-black md:border-l">
          <div className="flex w-full bg-[#262626] z-20 fixed top-0 justify-between items-center py-2 px-2 md:hidden">
            <div className="h-4 w-5 bg-gray-500 animate-pulse rounded"></div>
            <div className="h-4 w-20 bg-gray-500 animate-pulse rounded"></div>
            <p></p>
          </div>

          <div className="hidden bg-black border-b border-opacity-25 py-3 z-10 border-slate-50 px-3 md:block md:fixed w-[37%]">
            <div className="flex items-center gap-3">
              <div className="rounded-full ">
                <div className="w-9 h-9 rounded-full bg-gray-500 animate-pulse"></div>
              </div>
              <div className="h-4 w-20 bg-gray-500 animate-pulse rounded"></div>
            </div>
          </div>

          <div className="hidden mt-16 md:block bg-black py-3 w-full px-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full self-start min-w-[37px]">
                <div className="w-9 h-9 bg-gray-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="h-4 w-20 bg-gray-500 animate-pulse rounded"></div>
                <div className="flex text-xs gap-4 mt-2 text-[#a8a8a8]">
                  <div className="bg-gray-500 h-4 w-12 animate-pulse rounded"></div>
                  <div className="bg-gray-500 h-4 w-20 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-16 md:mt-4">
            <div className="flex gap-2 justify-between px-3">
              <div className="flex gap-3 w-full">
                <div className="min-w-[37px]">
                  <div className="w-9 h-9 mt-1 bg-gray-500 animate-pulse rounded-full"></div>
                </div>
                <div className="flex flex-col gap-[1px] w-full">
                  <div className="text-xs font-semibold flex">
                    <div className="h-4 w-20 bg-gray-500 animate-pulse rounded"></div>
                    <span className="h-4 w-16 bg-gray-500 animate-pulse rounded ml-2"></span>
                  </div>
                  <div className="h-6 w-full my-1 bg-gray-500 animate-pulse rounded"></div>
                  <div className="flex text-xs gap-4 text-[#a8a8a8]">
                    <div className="h-4 w-10 bg-gray-500 animate-pulse rounded"></div>
                    <div className="h-4 w-14 bg-gray-500 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col items-center gap-1 text-[#a8a8a8]">
                  <div className="h-5 w-5 bg-gray-500 animate-pulse rounded-full"></div>
                  <div className="h-4 w-8 bg-gray-500 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between px-3">
              <div className="flex gap-3 w-full">
                <div className="min-w-[37px]">
                  <div className="w-9 h-9 mt-1 bg-gray-500 animate-pulse rounded-full"></div>
                </div>
                <div className="flex flex-col gap-[1px] w-full">
                  <div className="text-xs font-semibold flex">
                    <div className="h-4 w-20 bg-gray-500 animate-pulse rounded"></div>
                    <span className="h-4 w-16 bg-gray-500 animate-pulse rounded ml-2"></span>
                  </div>
                  <div className="h-6 w-full my-1 bg-gray-500 animate-pulse rounded"></div>
                  <div className="flex text-xs gap-4 text-[#a8a8a8]">
                    <div className="h-4 w-10 bg-gray-500 animate-pulse rounded"></div>
                    <div className="h-4 w-14 bg-gray-500 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col items-center gap-1 text-[#a8a8a8]">
                  <div className="h-5 w-5 bg-gray-500 animate-pulse rounded-full"></div>
                  <div className="h-4 w-8 bg-gray-500 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between px-3">
              <div className="flex gap-3 w-full">
                <div className="min-w-[37px]">
                  <div className="w-9 h-9 mt-1 bg-gray-500 animate-pulse rounded-full"></div>
                </div>
                <div className="flex flex-col gap-[1px] w-full">
                  <div className="text-xs font-semibold flex">
                    <div className="h-4 w-20 bg-gray-500 animate-pulse rounded"></div>
                    <span className="h-4 w-16 bg-gray-500 animate-pulse rounded ml-2"></span>
                  </div>
                  <div className="h-6 w-full my-1 bg-gray-500 animate-pulse rounded"></div>
                  <div className="flex text-xs gap-4 text-[#a8a8a8]">
                    <div className="h-4 w-10 bg-gray-500 animate-pulse rounded"></div>
                    <div className="h-4 w-14 bg-gray-500 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col items-center gap-1 text-[#a8a8a8]">
                  <div className="h-5 w-5 bg-gray-500 animate-pulse rounded-full"></div>
                  <div className="h-4 w-8 bg-gray-500 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed hidden border-slate-50/25 md:left-1/2 bottom-0 gap-3 w-full px-3 py-2 bg-[#262626] md:block md:bottom-20 md:bg-black md:max-w-[37%] md:border-l">
            <div className="flex w-full justify-between items-center py-2 px-3 md:px-0">
              <div className="flex items-center gap-6">
                <div className="h-6 w-6 bg-gray-500 animate-pulse rounded-md"></div>
                <div className="h-6 w-6 bg-gray-500 animate-pulse rounded-md"></div>
                <div className="h-6 w-6 bg-gray-500 animate-pulse rounded-md"></div>
              </div>
              <div className="h-6 w-6 bg-gray-500 animate-pulse rounded-md"></div>
            </div>
            <div className="h-4 w-14 bg-gray-500 animate-pulse rounded"></div>
            <div className="h-4 w-16 bg-gray-500 animate-pulse mt-1 rounded"></div>
          </div>
          <div className="fixed  flex justify-between items-center border-slate-50/25 md:left-1/2 bottom-0 gap-3 w-full px-3 py-2 bg-[#262626] md:bottom-6 md:bg-black md:max-w-[37%] md:border-l ">
            <div className="aspect-square min-w-[40px]">
              <div className="w-10 h-10 rounded-full bg-gray-500 animate-pulse"></div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-full">
                <div className="w-[93%] bg-gray-500 h-6 animate-pulse rounded"></div>
              </div>
              <div className="h-4 w-8 bg-gray-500 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailPostSkeleton
