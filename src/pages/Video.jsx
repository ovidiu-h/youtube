import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;
const VideoArea = styled.div`
    flex: 1;
`;
const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 60%;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
const RecommendationsArea = styled.div`
    width: 300px;
`;
const Video = () => {
    return (
        <Container>
            <VideoArea>
                <VideoWrapper>
                    <iframe src="https://www.youtube.com/embed/PM2f835zx88" frameborder="0" title="Video"></iframe>
                </VideoWrapper>
            </VideoArea>
            <RecommendationsArea>reccomendations</RecommendationsArea>
        </Container>
    );
};

export default Video;
