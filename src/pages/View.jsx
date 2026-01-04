import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Table from '../components/Table'
import Button from '../components/Buttons'
import { useNavigate } from 'react-router-dom'
import { host } from '../components/api';
import axios from 'axios'

export default function view() {
  const [data, setdata] = useState([])
    const nav=useNavigate()
 
  useEffect(() => {
   fetch()
  }, [])
  const fetch = async () => {
    try {
      const res = await axios.get(`${host}/rt`)
      if (res.data.success) {
        setdata(res.data.savin)
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }
  console.log(data)
 
  return (
    <div>
      <Typography sx={{ fontWeight: "bold" }}>expense tracker</Typography>
      <Box>
        <Table  fetch={data}/>
        <Button />
      </Box>
    </div>
  )
}
