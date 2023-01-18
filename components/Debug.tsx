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
  const { toggle, filtersSticky, publicationsCount, setPublicationsCount, publicationsBound} = useUIStore(state => state)

  return (
    <div className='fixed z-50 bottom-0 left-0'>
      <div
        className='flex flex-col p-2 sticky top-0 right-0 self-start opacity-25 hover:opacity-100'
        style={{width: 300}}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Debug</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between align-center'>
                <Typography className='self-center'>Filters Sticky</Typography>
                <Switch checked={filtersSticky} onChange={(event) => toggle('filtersSticky')(event.target.value === 'true')} />
              </div>
              <Stack direction={'column'}>
                <Typography>Publications Count</Typography>
                <Slider
                  value={publicationsCount}
                  onChange={(event) => {
                    setPublicationsCount(parseInt(event.target.value))
                  }}
                  valueLabelDisplay='auto'
                  step={5}
                  min={0}
                  max={50}
                />
              </Stack>
              <div className='flex justify-between align-center'>
                <Typography className='self-center'>Publications Bound</Typography>
                <Switch checked={publicationsBound} onChange={(event) => toggle('publicationsBound')(event.target.value === 'true')} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
