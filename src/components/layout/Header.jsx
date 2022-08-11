import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    position: sticky;
    top: 0;
    height: 56px;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.backgroundSoft};
    color: ${({ theme }) => theme.text};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

const MenuArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 2;
`;

const UserArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 2;
`;

const ItemIcon = styled.span`
    font-size: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Logo = styled(Link)`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.text};
    letter-spacing: -0.065em;
    font-size: 20px;
`;
const LogoIcon = styled.img`
    width: 34px;
`;

const SearchArea = styled.div`
    display: flex;
    flex: 5;
    height: 40px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme.background};
    overflow: hidden;
`;

const SearchInput = styled.input`
    display: flex;
    flex: 1;
    padding: 0 10px;
`;
const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    background-color: ${({ theme }) => theme.backgroundAlt};
`;

const Button = styled.button``;

const Header = ({ menuExpanded, setMenuExpanded, darkMode, setDarkMode }) => {
    return (
        <Container>
            <MenuArea>
                <ItemIcon onClick={() => setMenuExpanded(!menuExpanded)}>
                    <MenuIcon />
                </ItemIcon>
                <Logo to="">
                    <LogoIcon src="https://www.iconlogovector.com/uploads/images/2022/01/youtube-button.png" alt="logo" />
                    YouTube
                </Logo>
            </MenuArea>
            <SearchArea>
                <SearchInput placeholder="Search" />
                <SearchButton>
                    <SearchIcon />
                </SearchButton>
            </SearchArea>
            <UserArea>
                <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'} Mode</Button>
            </UserArea>
        </Container>
    );
};

export default Header;
