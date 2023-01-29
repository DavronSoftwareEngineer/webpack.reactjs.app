import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import planet from './photo/planet.png';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[400],
  color: grey[700],
  height: "40px",
  '&:hover': {
    backgroundColor: grey[500],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '10ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function PrimaryAppBar() {

    const [state, setState] = React.useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.2, py: 1}}>
            <IconButton onClick={toggleDrawer(anchor, false)}>
                <MenuIcon sx={{color: "grey"}} /> 
            </IconButton>
            <IconButton onClick={toggleDrawer(anchor, false)}>
                <Badge badgeContent={""} color="success" variant='dot'>
                    <LocalGroceryStoreOutlinedIcon sx={{color: "grey"}}/>
                </Badge>
            </IconButton>
          </Box>
          <Divider />
          <Search 
            onClick={toggleDrawer(anchor, true)}
                sx={{
                    display: "flex", 
                    alignItems: 'center',
                    mt: 1

                    }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          <List>
            {[
            "About Us",
            "Service",
            "Menu",
            "Contact"
            ].map((text, index) => (
              <ListItem key={text} disablePadding onClick={toggleDrawer(anchor, false)}>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "#fff", py: 1}}>
        <Toolbar>
            <Box>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}
                    sx={{ mr: 2, display: {xl: "block", sm: "block", md: "none", lg: "none", xl: "none"} }}
                >
                    <MenuIcon sx={{color: "grey"}} />
                </Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onOpen={toggleDrawer(anchor, true)}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
                </React.Fragment>
            ))}
            </Box>
                
            <Box sx={{display: {xs: "none", sm: "none", md: "block", lg: "block", xl: "block"}}}>
            <Button variant="text" href='#/'
                sx={{textTransform: "capitalize",
                color: grey[900]
                }} 
                color="inherit" 
                size='large'>About Us</Button>
            <Button variant="text" href='#Sec2'
                color="inherit" 
                sx={{
                    textTransform: "capitalize",
                    color: grey[900]
                }} 
                size='large'>Service</Button>
            <Button variant="text" href='#Sec3' 
                color="inherit" 
                sx={{
                    textTransform: "capitalize",
                    color: grey[900]
                }} size='large'>Menu</Button>
            <Button variant="text" href='#Sec4'
                color="inherit" 
                sx={{
                    textTransform: "capitalize",
                    color: grey[900]
                    }} size='large'>Contact</Button>
            </Box> 
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
                <Box variant="a" component={"a"} href="">
                    <Box variant="img" component={"img"} src={planet}/>
                </Box>
            </Box>
            <Box sx={{display: { xs: 'none', sm: "none", md: "flex", lg: "flex", xl: 'flex' }, alignItems: "center"}}>    
            <Search 
                sx={{
                    display: "flex", 
                    alignItems: 'center',
                    }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            //   sx={{ml: 1}}
            >
              <Badge badgeContent={""} color="success" variant='dot'>
                <LocalGroceryStoreOutlinedIcon sx={{color: "grey"}}/>
              </Badge>
            </IconButton>  
          </Box>
          <Box sx={{ml: 3}}>
            <Button variant='contained' color='success' sx={{textTransform: "capitalize"}}>Regestar now</Button>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
