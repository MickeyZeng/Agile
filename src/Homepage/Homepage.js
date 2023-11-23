import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SpeedIcon from '@mui/icons-material/Speed';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'element-theme-default';
import { blueGrey } from '@mui/material/colors';


import './Homepage.css';
import { Card } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header() {
        return(
            <AppBar color="transparent" position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap sx={{flexGrow:1}}>
                        Miracle Agile
                    </Typography>
                    <nav className="toolbarNav">
                        <Button variant="contained">Create Stories</Button>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                    </nav>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar.jpg" sx={{ my: 1, mx: 1.5 }} />
                </Toolbar>
            </AppBar>
        );
}

function Setting(){
    return (
      <div className="setting">
        <div className="speedIcon"><SpeedIcon color='primary' fontSize="large"/></div>
        <div>
          <Typography variant="h6" color="inherit" noWrap sx={{ my: 1, mx: 1.5 }}>
            4 Days Remaining
          </Typography>
        </div>
        <div className="settingsIcon"><SettingsIcon color='primary' fontSize="large"/></div>
      </div>
    );
}


function EventBoard(){
  const cardTitle = ["Sprint Planning", "Daily Scrum", "Sprint Review", "Scrum Retrospective"];
  const cardContent = ["Test Sprint Planning ", "Test Daily Scrum", "Test Sprunt Review", "Test Scrum Retro"];
  const cardImg = ["plan.jpg","dsu.jpg","review.jpg","retro.jpg"]
  const status = ["done","doing","will", "will"]
  return (
    <div className="eventBoard">
      {cardTitle.map((item,index) => (
        <Card sx={{ maxWidth: 345, backgroundColor: status[index]==="done"? "#333333": status[index]==="doing" ? "#3f51b5" : ""}}>
          <CardMedia
            sx={{ height: 140 }}
            image={`/static/images/${cardImg[index]}`}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {cardContent[index]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Start</Button>
            <Button size="small">Learn More</Button>
            <Button size="small">End</Button>
          </CardActions>
        </Card>
      ))
      }
    </div>
  );
}

export default function Homepage() {
    return (
        <div>
            <Header />
            <Setting />
            <EventBoard />
        </div>
    );
}