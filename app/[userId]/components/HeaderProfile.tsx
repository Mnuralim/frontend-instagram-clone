import ButtonBack from '@/components/ButtonBack'
import React, { useState } from 'react'
import ModalOptions from './ModalOptions'
import { VscThreeBars } from 'react-icons/vsc'

interface Props {
  user: IUser
}

const HeaderProfile = ({ user }: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const handleCloseModal = () => {
    setShowOptions(false)
  }

  return (
    <div className="w-full mt-3 justify-between items-center flex px-3 md:hidden">
      <ButtonBack />
      <h1 className="font-semibold text-2xl">{user?.username}</h1>
      <button onClick={() => setShowOptions(true)}>
        <VscThreeBars size={24} />
      </button>
      <ModalOptions isOpen={showOptions} onClose={handleCloseModal} />
    </div>
  )
}

export default HeaderProfile
