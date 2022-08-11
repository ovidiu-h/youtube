import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
    flex: 0 1 calc(25% - 20px);
    margin: 10px 10px 30px 10px;

    @media (max-width: 1200px) {
        flex: 0 1 calc(33.33% - 20px);
    }
    @media (max-width: 1024px) {
        flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 640px) {
        flex: 0 1 calc(100% - 20px);
    }
`;

const Thumbnail = styled.img`
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px 0;
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
`;
const Details = styled.div``;
const Title = styled.div`
    display: block;
    display: box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    margin-bottom: 10px;
    font-weight: 600;
    line-height: 1.25;
`;
const Info = styled.div`
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.textSoft};
    margin-bottom: 5px;
`;

const Card = () => {
    return (
        <Container to="watch/PM2f835zx88">
            <Thumbnail src="https://i.ytimg.com/vi/xpVfcZ0ZcFM/hq720.jpg" alt="thumbnail" />
            <Content>
                <Avatar
                    src="https://yt3.ggpht.com/6rLXl36oQXNCCToi1s2nxiakGsiDlWpJmh0RIL8XQ-K2raRz28R4qSQN-yRqtSIDwR6fFt0i=s88-c-k-c0x00ffffff-no-rj"
                    alt="avatar"
                />
                <Details>
                    <Title>DJ Khaled ft. Drake & Lil Baby - STAYING ALIVE (Official Video)</Title>
                    <Info>DJ Khaled</Info>
                    <Info>7.5M views • 5 days ago</Info>
                </Details>
            </Content>
        </Container>
    );
};

export default Card;
