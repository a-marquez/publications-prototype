// reference: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface GreeterState {
    name: string
    setName: (newName: string) => void
}

const useGreeterStore = create<GreeterState>()(
    immer((set) => ({
        name: '',
        setName: (newName) => set((state) => {
            state.name = newName
        })
    }))
)

export default useGreeterStore
