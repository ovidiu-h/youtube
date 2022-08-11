import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { dark, light } from './utils/theme';
import PageLayout from './components/layout/PageLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Video from './pages/Video';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider theme={darkMode ? dark : light}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
                        <Route index element={<Home />} />
                        <Route path="watch/:id" element={<Video />} />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
