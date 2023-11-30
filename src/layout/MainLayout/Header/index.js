import * as React from 'react';
import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, useMediaQuery } from '@mui/material';
import { PublicOutlined } from '@mui/icons-material';
// project imports
import LAYOUT_CONST from 'constant';
import useConfig from 'hooks/useConfig';
import LogoSection from '../LogoSection';
//import SearchSection from './SearchSection';
//import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
//import LocalizationSection from './LocalizationSection';
//import MegaMenuSection from './MegaMenuSection';
// import NotificationSection from './NotificationSection';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';

import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const theme = useTheme();

    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menu);

    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const { layout } = useConfig();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>

                {layout === LAYOUT_CONST.VERTICAL_LAYOUT || (layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && matchDownMd) ? (
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            overflow: 'hidden',
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
                            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
                                color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
                            }
                        }}
                        onClick={() => dispatch(openDrawer(!drawerOpen))}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="20px" />
                    </Avatar>
                ) : null}
            </Box>

            {/* header search */}
            {/* <SearchSection /> */}

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/* mega-menu */}
            {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <MegaMenuSection />
            </Box> */}

            <Box >
                <List >
                    <ListItemButton onClick={handleClick} sx={{ pl: 1, pr: 1 }}>
                        <PublicOutlined color="secondary"></PublicOutlined>
                        <ListItemText  primary="Workspace: Data Sources " />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 1, pr: 1}}>
                            <ListItemButton onClick={handleClick} component={Link} to="/subscription-list" sx={{ pl: 4 }}>
                              
                                <ListItemText primary="User Accounts" />
                            </ListItemButton>
                            <ListItemButton onClick={handleClick} component={Link} to="/subscriptions" sx={{ pl: 4 }}>
                                
                                <ListItemText primary="System Settings" />
                            </ListItemButton>
                            <ListItemButton onClick={handleClick} component={Link} to="/subscription-list" sx={{ pl: 4 }}>
                                
                                <ListItemText primary="Data Sources" />
                            </ListItemButton>
                            <ListItemButton onClick={handleClick} component={Link} to="/subscription-list" sx={{ pl: 4 }}>
                               
                                <ListItemText primary="Insights" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>

            {/* live customization & localization */}
            {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <LocalizationSection />
            </Box> */}

            {/* notification & profile */}
            {/* <NotificationSection /> */}
            <Box>
            <ProfileSection />
            </Box>
            {/* mobile header */}
            {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <MobileSection />
            </Box> */}
        </>
    );
};

export default Header;
