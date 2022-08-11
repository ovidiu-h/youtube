import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Home = () => {
    return (
        <Container>
            {new Array(20).fill(0).map((item, i) => (
                <Card key={i} />
            ))}
        </Container>
    );
};

export default Home;
