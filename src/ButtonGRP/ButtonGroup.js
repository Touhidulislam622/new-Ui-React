import React from 'react'
import {ButtonGroup , Button} from "@mui/material"

const ButtonGroups = () => {
  return (
    <div>
        <h2>ButtonGroup</h2>
        <ButtonGroup color="secondary" variant='primary' orientation='vertical'>
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
    </div>
  )
}

export default ButtonGroups;