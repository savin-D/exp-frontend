import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link,Navigate, useNavigate } from 'react-router-dom';

export default function FloatingActionButtons() {
    const style={
        position:"absolute",
        right:20,
        bottom:20
    }
    const nav=useNavigate()
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {/* <Link to="/insert"> */}
      <Fab color="primary" aria-label="add" sx={style} onClick={()=>{nav("/insert")}}>
        <AddIcon />
      </Fab>
      {/* </Link> */}
    </Box>
  );
}
