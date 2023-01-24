import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MockFilters({count}) {

  return (
    <div>
      {Array(count).fill(0).map((value, index) => (
        <Accordion key={index} className='border-solid border-1 border-blue-300'>
          <AccordionSummary
            className='bg-blue-100'
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Filter {index + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
