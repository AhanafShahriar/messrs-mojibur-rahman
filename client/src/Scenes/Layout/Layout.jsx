import React from 'react';
import { useState } from 'react';
import {Box, useMediaQuery} from "@mui/material"
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
     <Box width="100%" height="100%">
        <Box>

            <Outlet></Outlet>
        </Box>
     </Box>
        </>
    );
};

export default Layout;