import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallReceivedTwoToneIcon from '@mui/icons-material/CallReceivedTwoTone';
import SendToMobileTwoToneIcon from '@mui/icons-material/SendToMobileTwoTone';
import CurrencyBitcoinTwoToneIcon from '@mui/icons-material/CurrencyBitcoinTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import About from './components/About.js';
import Send from './components/Send.js';
import Receive from './components/Receive.js';
import BTCPrice from './components/BTCPrice.js';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function MainContent(props){ 
  //constructor(props){
  //  super(props);
  //  this.state = {    
  //      page: 'BTCPrice',
  //  }

  //}  
  const [page, setPage] = React.useState(false);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSetPage = (val) => {
    setPage(val)
  }

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ background: '#F7931A' }} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Wouldn't Shout If A Shark Bit
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
  
          <ListItem key={'Send'} disablePadding>
                <ListItemButton onClick={() => handleSetPage('Send')}>
                  <ListItemIcon>
                    {<SendToMobileTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={'Send'} />
                </ListItemButton>
              </ListItem>
  
  
              <ListItem key={'Receive'} disablePadding>
                <ListItemButton onClick={() => handleSetPage('Receive')}>
                  <ListItemIcon>
                    {<CallReceivedTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={'Receive'} />
                </ListItemButton>
              </ListItem>
  
              <ListItem key={'BTCPrice'} disablePadding onClick={() => handleSetPage('BTCPrice')}>
                <ListItemButton >
                  <ListItemIcon>
                    {<CurrencyBitcoinTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={'BTC Price'} />
                </ListItemButton>
              </ListItem>
  
              <ListItem key={'About'} disablePadding onClick={() => handleSetPage('About')}>
                <ListItemButton >
                  <ListItemIcon>
                    {<LiveHelpTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={'About'} />
                </ListItemButton>
              </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <div>
            {page === 'Send' ? <Send /> : null}
            {page === 'Receive' ? <Receive /> : null}
            {page === 'BTCPrice' ? <BTCPrice /> : null}
            {page === 'About' ? <About /> : null}
          </div>
         
        </Main>
      </Box>
    );}
   

  
  