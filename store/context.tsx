'use client'
import { Dispatch, Suspense, createContext, useContext, useReducer } from 'react'
import { IAction, loadingUploadReducer } from './reducer'

interface IAppContext {
  loadingUpload: {
    loading: boolean
    media: string
    type: string
  }
}

const initialState = {
  loadingUpload: {
    loading: false,
    media: '',
    type: '',
  },
}

const AppContext = createContext<{
  state: IAppContext
  dispatch: Dispatch<IAction>
}>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = ({ loadingUpload }: IAppContext, action: IAction) => ({
  loadingUpload: loadingUploadReducer(loadingUpload, action),
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Suspense>
      <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
    </Suspense>
  )
}

const useApppContext = () => useContext(AppContext)

export { AppProvider, useApppContext }
