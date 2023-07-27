import React from 'react'
import { AppBar, Box, InputBase, Toolbar, Typography, styled } from '@mui/material';
import { logoURL } from '../../constants/constant'
import { Menu as MenuIcon, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const StyledMenu = styled(Toolbar)`
background:#121212;
min-height: 56px !important;
padding: 0 115px !important;
box-shadow: none;
justify-content: space-between;
& > * {
    padding: 0 16px;
}
& > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
        font-weight: 600;
        font-size: 14px;
    }
}
& > p {
    font-weight: 600;
    font-size: 14px;
}


`
const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`
 
const Logo = styled('img')({
  width: 64,
})

function Header() {
  const [open, setOpen] = useState(null);
  const handleClick  = (e)=>{
    setOpen(e.currentTarget);
  }
  const handleClose = ()=>{
    setOpen(null)
  }
  return (
    <AppBar position='static'>
      <StyledMenu>
        <Logo src={logoURL} alt="logo" />
        <Box onClick={handleClick}>
          <MenuIcon />
          <Typography>Menu</Typography>

        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField
                    variant="outlined"
                />
        <Typography>IMDb<Typography component="span" style={{ fontSize: 14 }}>Pro</Typography></Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>


      </StyledMenu>
    </AppBar>


  )
}

export default Header