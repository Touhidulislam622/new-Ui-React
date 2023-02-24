import React, { useState } from "react";
import {Button} from '@mui/material';
// import Button from '@mui/material/Button'///// another system for button;
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';


const MiuiBTN = () => {
    
    const [color, setColor] = useState("inherit")

    function aleartCastom ()
    {
        setColor("secondary");
        // alert("AleartCastom")
    }

       
  return (
    <div>
      <h1>Button </h1>
      <Button variant="contained" color={color} onClick={() => {aleartCastom()}} size = "small" endIcon={<AirportShuttleRoundedIcon/>} >
        Success
      </Button>
    </div>
  );
};

export default MiuiBTN;
