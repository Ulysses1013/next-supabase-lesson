import { create } from 'zustand'

type EditedTask = {
  id: string
  title: string | null
}

type LoginUser = {
  id: string | undefined
  email: string | undefined
}

type State = {
  // Task
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void

  // LoginUser
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}

const useStore = create<State>((set) => ({
  // Task
  editedTask: { id: '', title: '' },
  updateEditedTask: (payload) => set({ editedTask: payload }),
  resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),

  // LoginUser
  loginUser: { id: '', email: '' },
  updateLoginUser: (payload) => set({ loginUser: payload }),
  resetLoginUser: () => set({ loginUser: { id: '', email: '' } }),
}))

export default useStore
