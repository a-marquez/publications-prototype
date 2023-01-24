import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useGreeterStore = create(
    immer((set) => ({
        name: '',
        setName: (newName) => set((state) => {
            state.name = newName
        })
    }))
)

export default useGreeterStore
