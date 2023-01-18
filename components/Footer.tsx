import React, { useState } from 'react'
import Button from '@mui/material/Button'
import useCounterStore from '../stores/useCounterStore'

export default function Counter() {
    const {count, increment, decrement} = useCounterStore((state) => state)

    return (
        <div className='flex justify-between'>
            <Button variant='contained' onClick={increment}>+</Button>
            <span className='p-2'>{count}</span>
            <Button variant='contained' onClick={decrement}>-</Button>
        </div>
    );
}