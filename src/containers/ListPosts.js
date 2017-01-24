import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ListPosts from '../components/ListPosts';

const allPosts = gql`query allPosts {
  allPosts(orderBy: createdAt_DESC) {
    id
    imageUrl
    description
  }
}`;

const ListPostsWithData = graphql(allPosts, {
  props: ({ data: { loading, allPosts }}) => ({
    isLoading: loading,
    posts: allPosts
  })
})(ListPosts);

export default ListPostsWithData;