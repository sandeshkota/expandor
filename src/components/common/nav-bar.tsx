import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export default function NavBar(){
    const [shouldOpenUserMenu, setShouldOpenUserMenu] = useState<boolean>(false);
    let [isLogoHovered, setIsLogoHovered] = useState<boolean>(false);
    function logoFocusedIn() {
        setIsLogoHovered(true);
    }
    function logoFocusedOut() {
        setIsLogoHovered(false);
    }

    function handleCloseUserMenu() {
        setShouldOpenUserMenu(false);
    }
    function handleOpenUserMenu(){
        setShouldOpenUserMenu(true);
    }

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: isLogoHovered ? '.3rem' : '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={logoFocusedIn}
                            onMouseOut={logoFocusedOut}
                        >
                            EXPANDOR
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                href="/"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button
                                href="/about"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
                                    <Avatar alt="Sandesh Kota" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                //anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={shouldOpenUserMenu}
                                onClose={handleCloseUserMenu}
                                >
                                <MenuItem key={'profile'} type="button" href='/about'>
                                    <Typography textAlign="center">profile</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}