import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

import SettingsIcon from '@mui/icons-material/Settings';
import BugReportIcon from '@mui/icons-material/BugReport';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Container = styled.div`
    position: sticky;
    top: 56px;

    background-color: ${({ theme }) => theme.backgroundSoft};

    height: calc(100vh - 56px);
    width: ${({ isCollapsed }) => (isCollapsed ? '64px' : '240px')};
    overflow-y: auto;

    @media (max-width: 640px) {
        display: none;
    }
`;

const ItemLink = styled(NavLink)`
    display: block;
    transition: background-color 0.3s ease;

    &:hover,
    &.active {
        background-color: ${({ theme }) => theme.backgroundAlt};
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start;')};

    width: 100%;
    height: ${({ isCollapsed }) => (isCollapsed ? '64px' : '40px')};
    gap: ${({ isCollapsed }) => (isCollapsed ? '5px' : '20px')};
    padding: ${({ isCollapsed }) => !isCollapsed && '0 20px'};

    color: ${({ theme }) => theme.text};

    flex-direction: ${({ isCollapsed }) => isCollapsed && 'column'};
    font-size: ${({ isCollapsed }) => isCollapsed && '8px'};
`;

const ItemIcon = styled.span`
    font-size: 24px;
    display: flex;
    align-items: center;
`;
const ItemLabel = styled.span``;

const Hr = styled.hr`
    border: 0.5px solid ${({ theme }) => theme.backgroundAlt};
    margin: 10px 0;

    display: ${({ isCollapsed }) => isCollapsed && 'none'};
`;

const MoreLinks = styled.div``;
const SectionTitle = styled.div`
    color: ${({ theme }) => theme.textSoft};
    font-weight: 600;
    text-transform: uppercase;

    padding: 10px 20px 20px;
`;

const Menu = ({ menuExpanded }) => {
    const isCollapsed = !menuExpanded;

    return (
        <Container isCollapsed={isCollapsed}>
            <ItemLink to="/">
                <Item isCollapsed={isCollapsed}>
                    <ItemIcon>
                        <HomeIcon />
                    </ItemIcon>
                    <ItemLabel>Home</ItemLabel>
                </Item>
            </ItemLink>
            <ItemLink to="explore">
                <Item isCollapsed={isCollapsed}>
                    <ItemIcon>
                        <ExploreIcon />
                    </ItemIcon>
                    <ItemLabel>Explore</ItemLabel>
                </Item>
            </ItemLink>
            <ItemLink to="shorts">
                <Item isCollapsed={isCollapsed}>
                    <ItemIcon>
                        <GroupWorkIcon />
                    </ItemIcon>
                    <ItemLabel>Shorts</ItemLabel>
                </Item>
            </ItemLink>
            <ItemLink to="subscriptions">
                <Item isCollapsed={isCollapsed}>
                    <ItemIcon>
                        <SubscriptionsIcon />
                    </ItemIcon>
                    <ItemLabel>Subscriptions</ItemLabel>
                </Item>
            </ItemLink>

            <Hr isCollapsed={isCollapsed} />

            <ItemLink to="library">
                <Item isCollapsed={isCollapsed}>
                    <ItemIcon>
                        <LibraryAddIcon />
                    </ItemIcon>
                    <ItemLabel>Library</ItemLabel>
                </Item>
            </ItemLink>
            <ItemLink to="history">
                <Item isCollapsed={isCollapsed}>
                    <ItemIcon>
                        <HistoryIcon />
                    </ItemIcon>
                    <ItemLabel>History</ItemLabel>
                </Item>
            </ItemLink>

            <Hr isCollapsed={isCollapsed} />

            {menuExpanded && (
                <MoreLinks>
                    <SectionTitle>Explore</SectionTitle>

                    <ItemLink to="music">
                        <Item>
                            <ItemIcon>
                                <MusicNoteIcon />
                            </ItemIcon>
                            <ItemLabel>Music</ItemLabel>
                        </Item>
                    </ItemLink>
                    <ItemLink to="sports">
                        <Item>
                            <ItemIcon>
                                <SportsFootballIcon />
                            </ItemIcon>
                            <ItemLabel>Sports</ItemLabel>
                        </Item>
                    </ItemLink>
                    <ItemLink to="gaming">
                        <Item>
                            <ItemIcon>
                                <SportsEsportsIcon />
                            </ItemIcon>
                            <ItemLabel>Gaming</ItemLabel>
                        </Item>
                    </ItemLink>
                    <ItemLink to="360video">
                        <Item>
                            <ItemIcon>
                                <SlowMotionVideoIcon />
                            </ItemIcon>
                            <ItemLabel>360° Video</ItemLabel>
                        </Item>
                    </ItemLink>

                    <Hr />

                    <ItemLink to="settings">
                        <Item>
                            <ItemIcon>
                                <SettingsIcon />
                            </ItemIcon>
                            <ItemLabel>Settings</ItemLabel>
                        </Item>
                    </ItemLink>
                    <ItemLink to="report">
                        <Item>
                            <ItemIcon>
                                <BugReportIcon />
                            </ItemIcon>
                            <ItemLabel>Report history</ItemLabel>
                        </Item>
                    </ItemLink>
                    <ItemLink to="help">
                        <Item>
                            <ItemIcon>
                                <HelpIcon />
                            </ItemIcon>
                            <ItemLabel>Help</ItemLabel>
                        </Item>
                    </ItemLink>
                    <ItemLink to="feedback">
                        <Item>
                            <ItemIcon>
                                <FeedbackIcon />
                            </ItemIcon>
                            <ItemLabel>Send feedback</ItemLabel>
                        </Item>
                    </ItemLink>
                </MoreLinks>
            )}
        </Container>
    );
};

export default Menu;
