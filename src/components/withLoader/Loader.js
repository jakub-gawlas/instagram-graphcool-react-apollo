import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;

const Text = styled.p`
  font-size: 1.3rem;
`;

function Loader(){
  return(
    <Container>
      <Text>
        LOADING...
      </Text>
    </Container>  
  );
}

export default Loader;