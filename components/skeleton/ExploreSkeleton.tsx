import React from 'react'

const ExploreSkeleton = () => {
  return (
    <div>
      <div className="px-2 py-2 sticky bg-black top-0 z-10 md:hidden">
        <div className="w-full h-6 bg-gray-500 animate-pulse rounded"></div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="aspect-square relative group">
          <div className="w-full h-full bg-gray-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default ExploreSkeleton
