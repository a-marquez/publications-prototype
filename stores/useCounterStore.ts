// reference: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface CounterState {
    count: number
    increment: () => void
    decrement: () => void
}

const useCounterStore = create<CounterState>()(
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