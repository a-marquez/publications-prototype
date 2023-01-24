import React, { useState, useEffect, useRef } from 'react'
import { Select, MenuItem, TextField, IconButton } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import Chip from '@mui/material/Chip'
import SearchPagination from './SearchPagination'
import useUIStore from '../stores/useUIStore'

export default function SearchHeader() {
  const placeholderRef = useRef(null)
  const headerRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [placeholderHeight, setplaceholderHeight] = useState('initial')
  const [width, setWidth] = useState('initial')
  const [ascending, setAscending] = useState(true)

  const paginationTypeA = useUIStore((state) => state.paginationTypeA)
  const handleScroll = () => {
    if (placeholderRef.current && headerRef.current) {
      let isSticky = placeholderRef.current.getBoundingClientRect().top <= 0
      setIsSticky(isSticky)
      setWidth(isSticky === true ? placeholderRef.current.clientWidth : 'initial')
      setplaceholderHeight(isSticky === true ? headerRef.current.clientHeight : 'initial')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div ref={placeholderRef} style={{height: placeholderHeight}}></div>
      <div
        ref={headerRef}
        className={`
          flex flex-col gap-5 z-40 p-4 pb-0 t-0 bg-white border-solid border-1 border-slate-300 rounded-b-lg ${isSticky === true ? 'fixed' : 'relative'}`}
        style={{top: isSticky ? 0 : 'initial', width}}
      >
        <div className='flex justify-between'>
          <div className='flex grow'>
            <Select value='All' size='small' className=''>
              <MenuItem value='All'>All Types</MenuItem>
              <MenuItem value='A'>Type A</MenuItem>
              <MenuItem value='B'>Type B</MenuItem>
              <MenuItem value='C'>Type C</MenuItem>
            </Select>
            <TextField className='grow rounded-none' sx={{borderLeft: 0}} size='small' label="Search" variant="outlined" />
          </div>
          <div>
            <span className='inline-block min-w-[8em] text-right'>Sort by ({ascending === true ? 'asc' : 'desc'}): </span>
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
            <Select value='A' size='small'>
              <MenuItem value='A'>Characteristic A</MenuItem>
              <MenuItem value='B'>Characteristic B</MenuItem>
              <MenuItem value='C'>Characteristic C</MenuItem>
            </Select>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='p-2 flex items-center gap-2'>
            <Chip label='Clause A' onDelete={() => {}}/>
            <Chip label='Clause B' onDelete={() => {}}/>
            <Chip label='Clause C' onDelete={() => {}}/>
            <a href="#">Clear All</a>
          </div>
          {paginationTypeA && (
            <div>
              <SearchPagination />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
