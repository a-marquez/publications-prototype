import React, { useState } from 'react'
import Button from '@mui/material/Button'
import useCounterStore from '../stores/useCounterStore'

export default function Counter() {
    const {count, increment, decrement} = useCounterStore((state) => state)

    return (
        <div className='flex w-full bg-blue-200 max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
            Publications
        </div>
    );
}