import React from 'react';

import styled from 'styled-components';

import withTags from './withTags';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
`;

const Text = styled.p`
  margin: 1rem;
  font-size: 1.3rem;
  text-align: justify;
  max-width: 400px;
`;

const Tag = styled.a`
  font-style: italic;
`;

function Post({ description, imageUrl }){
  return(
    <Container>
      <Image src={imageUrl} />
      <Text>
        {withTags(Tag, { propName: 'href' })(description)}
      </Text>
    </Container>
  );
}

export default Post;