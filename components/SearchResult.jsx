import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function SearchResult({title='Search Result'}) {
  const [expanded, setExpanded] = useState(false)
  const icon = expanded === true ? <RemoveIcon /> : <AddIcon />

  return (
    <Accordion
      className='border-solid border-1 border-blue-300'
      onChange={() => setExpanded(!expanded)}
      expanded={expanded}
    >
      <AccordionSummary
        expandIcon={icon}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
}
