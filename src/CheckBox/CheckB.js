import React from 'react'
import {Checkbox} from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import {Favorite} from '@mui/icons-material'

const CheckB = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }

  return (
    <div>
        <h2>checkBox</h2>
        <Checkbox color="success" value="Touhid" onChange={handleChange}/>
        <Checkbox color="success" value="Touhid" 
        indeterminate
        onChange={handleChange}/>
       <Checkbox color="secondary" value="Touhid"   icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>


    </div>
  )
}

export default CheckB