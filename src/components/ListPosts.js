import React from 'react';

import styled from 'styled-components';

import Post from './Post';
import withLoader from './withLoader';

const ListItem = styled.li`
  list-style-type: none;
`;

function ListPosts({ posts }){
  return(
    <ul>
      {posts.map(({ description, imageUrl, id }) => (
        <ListItem key={id}>
          <Post description={description} imageUrl={imageUrl} />
        </ListItem>
      ))}
    </ul>
  );
}

export default withLoader(ListPosts);