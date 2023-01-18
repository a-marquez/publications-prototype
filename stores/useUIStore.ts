// reference: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface UIState {
    filtersWidth: number
    filtersSticky: boolean
    publicationsBound: boolean
    publicationsCount: number
    setPublicationsCount: (newCount: number) => void
    toggle: (property: string) => () => void
}

const initialState = {
  filtersWidth: 500,
  filtersSticky: true,
  publicationsBound: false,
  publicationsCount: 15,
}

const useUIStore = create<UIState>()(
    immer((set) => ({
        ...initialState,
        setPublicationsCount: (newCount) => set((state) => {state.publicationsCount = newCount}),
        toggle: (property) => () => set((state) => {
          state[property] = !state[property]
        })
    }))
)

export default useUIStore
