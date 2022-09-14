import React from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ListItemText from '@mui/material/ListItemText';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './NavbarStyles.css';
const MuiDrawer = (props) => {
    // const theme = useTheme();
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const listItem = [<Accordion className="menuItemDropDwn">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ><ViewWeekIcon style={{marginRight:2}} /> &nbsp;&nbsp;Experiments 
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            List
          </Typography>
        </AccordionDetails>
      </Accordion>, 'Starred', 'Send email', 'Drafts'];
    return (
        <div>
            <Drawer
                sx={{ width: props.drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: props.drawerWidth, boxSizing: 'border-box', top: '27%',left:'2%' }, }}
                variant="persistent"
                anchor="left"
                open={props.open}
                className="drawerMain"
            >
                <DrawerHeader className='drawerClose'>
                    <IconButton onClick={props.handleDrawerClose}>
                        <KeyboardBackspaceOutlinedIcon />
                    </IconButton>
                </DrawerHeader>
                <List className='drawerList'>
                    {listItem.map((text, index) => (
                        <ListItem key={text} disablePadding className={index===1 && 'activeClass'}>
                            <ListItemButton>
                            {index!==0 &&<ViewWeekIcon style={{marginRight:10}} />}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                
            </Drawer>
            <br />
            <DrawerHeader />
        </div>
    )
}

export default MuiDrawer;
