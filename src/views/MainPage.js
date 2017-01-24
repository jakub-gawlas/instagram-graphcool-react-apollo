import React from 'react';

import styled from 'styled-components';

import ListPosts from '../containers/ListPosts';
import CreatePost from '../containers/CreatePost';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.2rem dashed black;
  padding: 0.5rem;
`;

function MainPage(){
  return(
    <Container>
      <ListPosts />
      <CreatePost />
    </Container>
  );
}

export default MainPage;