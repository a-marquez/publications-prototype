// reference: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface GreeterState {
    name: number
    setName: (newName: string) => void
    resetName: () => void
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