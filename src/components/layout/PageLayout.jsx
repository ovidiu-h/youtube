import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Menu from './Menu';

const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`;

const MainContent = styled.div`
    display: flex;
`;

const Content = styled.div`
    padding: 10px;
    flex: 1;
`;

const PageLayout = ({ darkMode, setDarkMode }) => {
    const [menuExpanded, setMenuExpanded] = useState(true);

    return (
        <Container>
            <Header menuExpanded={menuExpanded} setMenuExpanded={setMenuExpanded} darkMode={darkMode} setDarkMode={setDarkMode} />
            <MainContent>
                <Menu menuExpanded={menuExpanded} />
                <Content>
                    <Outlet />
                </Content>
            </MainContent>
        </Container>
    );
};

export default PageLayout;
