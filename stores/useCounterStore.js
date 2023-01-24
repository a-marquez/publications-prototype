import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useCounterStore = create(
    immer((set) => ({
        count: 0,
        increment: () => set((state) => {
            state.count += 1
        }),
        decrement: () => set((state) => {
            state.count -= 1
        })
    }))
)

export default useCounterStore
