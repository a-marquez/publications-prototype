import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const initialState = {
  filtersWidth: 500,
  filtersSticky: true,
  filtersCount: 6,
  searchBound: false,
  searchCount: 15,
  paginationTypeA: true,
}

const useUIStore = create(
  immer((set) => ({
    ...initialState,
    setSearchCount: (newCount) => set((state) => {state.searchCount = newCount}),
    setFiltersCount: (newCount) => set((state) => {state.filtersCount = newCount}),
    toggle: (property) => () => set((state) => {
      state[property] = !state[property]
    })
  }))
)

export default useUIStore
