import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Documentation from './Documentation';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>

                        Quotation System
                    </Link>
                </Typography>
                <Button color="inherit">
                    <Link to={'/documentation'} style={{ textDecoration: "none", color: "white" }}>
                        Documentation
                    </Link>

                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
