import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { host } from '../components/Api'
import { toast } from 'react-toastify'


export default function Form() {
    const nav = useNavigate()
    const handlesub = async () => {
        try {
            const res = await axios.post(`${host}/add`, formdata)
            if (res.data.success) {
                toast.success("data uploaded")
            }
            nav("/")
        } catch (error) {
            console.log(error)
        }
    }
    const [formdata, setformdata] = useState({
        title: '',
        categories: '',
        amount: ''

    })
    return (
        <div>
            <Box>
                <Typography>Insert my expenses</Typography>
                <Box>
                    <Paper sx={{ backgroundColor: "#087" }}>
                        <TextField id="outlined-basic" label="title" fullWidth sx={{ mb: "5px", background: "white" }} value={formdata.title} onChange={(e) => { setformdata({ ...formdata, title: e.target.value }) }} />
                        <TextField id="outlined-basic" label="amount" fullWidth sx={{ mb: "5px", background: "white" }} type='number' value={formdata.amount} onChange={(e) => { setformdata({ ...formdata, amount: e.target.value }) }} />

                    </Paper>
                </Box>
                <FormControl fullWidth sx={{mb:2}}>
                    <InputLabel id="demo-simple-select-label">categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="categories"
                        onChange={(e) => { setformdata({ ...formdata, categories: e.target.value }) }}

                    >
                        <MenuItem value={"food"}>food</MenuItem>
                        <MenuItem value={"fashions"}>fashions</MenuItem>
                        <MenuItem value={"expense"}>expense</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="success" sx={{ margin: '5px' }} onClick={handlesub}>
                    submit
                </Button>
                <Button variant="outlined" color="error" onClick={() => { nav("/") }}>
                    home
                </Button>
            </Box>
        </div>
    )
}
