import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import useGreeterStore from '../stores/useGreeterStore'

export default function Greeter() {
    const { name, setName } = useGreeterStore((state) => state)

    const greeting = name.length > 2  ? <div>Hello, {name}</div> : <div>Who are you?</div>
    return (
        <div>
            {greeting}
            <TextField
                label='Name'
                variant='outlined'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    )
}