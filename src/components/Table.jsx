import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { host } from './api';
import { toast } from 'react-toastify';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({fetch}) {

const nav=useNavigate()
const handledel=async(id)=>{
  try {
    const res=await axios.delete(`${host}/del/${id}`)
    if(res.data.success)
    {
      toast.success(res.data.message)
    }
  } catch (error) {
    
  }
}

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>sl.no</TableCell>
            <TableCell>title</TableCell>
            <TableCell>category</TableCell>
            <TableCell>amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetch.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.categories}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>
              <Button onClick={()=>nav(`/edit/${row._id}`)}>edit</Button>
              <Button onClick={()=>{handledel(`${row._id}`)}}>delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
