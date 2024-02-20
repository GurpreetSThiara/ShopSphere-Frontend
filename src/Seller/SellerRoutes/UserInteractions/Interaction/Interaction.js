import { TableCell, TableRow } from '@mui/material'
import React from 'react'

const Interaction = ({interaction}) => {
  return (
    <TableRow key={interaction.interactionId}>
                    <TableCell>{interaction.action}</TableCell>
                    <TableCell>{interaction.productId}</TableCell>
                    <TableCell>{new Date(interaction.timestamp).toLocaleString()}</TableCell>
                  </TableRow>
  )
}

export default Interaction
