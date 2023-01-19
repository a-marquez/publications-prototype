// reference: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface UIState {
  [key: string]: number | boolean | ((parameter: any) => void)
  filtersWidth: number
  filtersSticky: boolean
  filtersCount: number
  searchBound: boolean
  searchCount: number
  paginationTypeA: boolean
  setSearchCount: (newCount: number) => void
  setFiltersCount: (newCount: number) => void
  toggle: (property: string) => () => void
}

const initialState = {
  filtersWidth: 500,
  filtersSticky: true,
  filtersCount: 6,
  searchBound: false,
  searchCount: 15,
  paginationTypeA: true,
}

const useUIStore = create<UIState>()(
  immer((set) => ({
    ...initialState,
    setSearchCount: (newCount) => set((state) => {state.searchCount = newCount}),
    setFiltersCount: (newCount) => set((state) => {state.filtersCount = newCount}),
    toggle: (property) => () => set((state: UIState) => {
      state[property] = !state[property]
    })
  }))
)

export default useUIStore
