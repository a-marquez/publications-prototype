import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TextField, Slider, Stack, Switch } from '@mui/material'


import useUIStore from '../stores/useUIStore'

export default function Debug() {
  const { toggle, filtersSticky, filtersCount,
    setFiltersCount, searchCount, setSearchCount, searchBound,
    paginationTypeA} = useUIStore(state => state)

  return (
    <div className='fixed z-50 bottom-0 left-0'>
      <div
        className='flex flex-col p-2 sticky top-0 right-0 self-start opacity-25 hover:opacity-100'
        style={{width: 250}}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className='bg-orange-400 rounded'
          >
            <Typography>Debug</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between align-center'>
                <Typography className='self-center'>Filters Sticky</Typography>
                <Switch checked={filtersSticky} onChange={(event) => toggle('filtersSticky')()} />
              </div>
              <Stack direction={'column'}>
                <Typography>Filters Count</Typography>
                <Slider
                  value={filtersCount}
                  onChange={(event, value) => {
                    setFiltersCount(value)
                  }}
                  valueLabelDisplay='auto'
                  step={1}
                  min={1}
                  max={10}
                />
              </Stack>
              <Stack direction={'column'}>
                <Typography>Search Count</Typography>
                <Slider
                  value={searchCount}
                  onChange={(event, value) => {
                    setSearchCount(value)
                  }}
                  valueLabelDisplay='auto'
                  step={5}
                  min={0}
                  max={50}
                />
              </Stack>
              <div className='flex justify-between align-center'>
                <Typography className='self-center'>Search Bound</Typography>
                <Switch checked={searchBound} onChange={toggle('searchBound')} />
              </div>
              <div className='flex justify-between align-center'>
                <Typography className='self-center'>Pagination {paginationTypeA ? 'A' : 'B'}</Typography>
                <Switch checked={paginationTypeA} onChange={toggle('paginationTypeA')} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
