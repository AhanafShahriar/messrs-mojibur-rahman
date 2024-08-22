import React, {useState} from 'react';
import {
    LightModeOutlined, 
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
} from "@mui/icons-material";
import FlexBetween from '../Componants/FlexBetween';
import ArrowDropDownOutlined from '@mui/icons-material/ArrowDropDownOutlined';
import { useDispatch } from 'react-redux';
import { setMode } from '../State';
import { AppBar, IconButton, InputAdornment, InputBase, Toolbar, useTheme } from '@mui/material';


const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <>
            <AppBar 
            sx={
               {
                 position: "static",
                 background: "none",
                 boxShadow: "none"
               }
            }
            >
                <Toolbar sx={{justifyContent: "space-between"}}>
                    {/* left side of navbar */}
                    <FlexBetween>
                        <IconButton onClick={()=> console.log('open/close side bar')}>
                            <MenuIcon/>
                        </IconButton>
                        <FlexBetween 
                        background={theme.palette.background.alt}
                        borderRadius="9px"
                        gap= "3rem"
                        p="0.1rem 1.5rem"
                        >  
                           <InputBase
                        placeholder='Search...'
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? '#4D536B' : '#E9EAEC',
                            borderRadius: '3px',
                            p: "0.1rem 1.5rem",
                            width: '100%', // Adjust width as needed
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                        
                    />
                        
                        </FlexBetween>
                    </FlexBetween>
                     {/* Right side of navbar */}
                     <FlexBetween gap="1.5rem">
                     <IconButton onClick={()=> dispatch(setMode())}>
                        {
                            theme.palette.mode === 'dark' ? (
                                <DarkModeOutlined sx={{ fontSize: "25px"}}/>
                            ): (
                                <LightModeOutlined sx={{ fontSize: "25px"}}/>
                            )
                        }
                        
                        </IconButton>
                        <IconButton>
                            <SettingsOutlined sx={{ fontSize: "25px"}}/>
                        </IconButton>

                     </FlexBetween>
                </Toolbar>

            </AppBar>
        </>
    );
};

export default Navbar;