import React, { useState, useEffect, useRef } from 'react'
import { Select, MenuItem, TextField, IconButton } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import Chip from '@mui/material/Chip'

export default function ResultsHeader() {
  const [offset, setOffset] = useState(0)
  const [ascending, setAscending] = useState(true)
  const initialPositionRef = useRef(null)
  const handleScroll = () => {
    if (initialPositionRef.current) {
      let deltaY = initialPositionRef.current.getBoundingClientRect().top * -1
      let newOffset = deltaY <= 0 ? 0 : deltaY
      setOffset(newOffset)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <>
      <div ref={initialPositionRef}></div>
      <section
        className={`relative z-40 p-2 t-0 bg-white border-solid border-1 border-slate-300`}
        style={{top: offset, transition: 'top .2s'}}
      >
        <div className='flex justify-between'>
          <div className='flex grow'>
            <Select value='All' size='small'>
              <MenuItem value='All'>All Types</MenuItem>
              <MenuItem value='A'>Type A</MenuItem>
              <MenuItem value='B'>Type B</MenuItem>
              <MenuItem value='C'>Type C</MenuItem>
            </Select>
            <TextField className='grow' size='small' label="Search" variant="outlined" />
          </div>
          <div>
            <span>Sort by ({ascending === true ? 'asc' : 'desc'}): </span>
            <Select value='A' size='small'>
              <MenuItem value='A'>Characteristic A</MenuItem>
              <MenuItem value='B'>Characteristic B</MenuItem>
              <MenuItem value='C'>Characteristic C</MenuItem>
            </Select>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={() => setAscending(!ascending)}
            >
              <SortIcon
                style={{
                  transition: 'transform .2s',
                  transform: `rotateX(${(ascending === true ? '180deg' : '0deg')})`
                }}
              />
            </IconButton>
          </div>
        </div>
        <div className='p-2 flex items-center gap-2'>
          <Chip label='Clause A' onDelete={() => {}}/>
          <Chip label='Clause B' onDelete={() => {}}/>
          <Chip label='Clause C' onDelete={() => {}}/>
          <a href="#">Clear All</a>
        </div>
      </section>
    </>
  )
}
