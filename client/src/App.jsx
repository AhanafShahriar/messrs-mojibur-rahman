import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, replace, Route, Routes } from 'react-router-dom';
const App = () => {
    const mode = useSelector((state) => state.mode.global); 
    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
    return (
        <>
            <div className='app'>
                <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route element={<Layout/>}>
                        <Route path='/' element={<Navigate to="/dashboard" replace />}/>
                        <Route path='/dashboard' element={<Dahboard/>} /> 44 minitu

                        </Route>
                    </Routes>
                </ThemeProvider>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;