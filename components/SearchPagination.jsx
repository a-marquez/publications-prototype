import React, { useState } from 'react'
import TablePagination from '@mui/material/TablePagination'

export default function ResultsPagination() {
  return (
    <TablePagination
      component="div"
      count={100}
      page={1}
      onPageChange={() => {}}
      rowsPerPage={10}
      onRowsPerPageChange={() => {}}
      labelRowsPerPage='Results per page:'
    />
  )
}

