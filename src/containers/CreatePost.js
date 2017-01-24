import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
 
import CreatePost from '../components/CreatePost';

const addPost = gql`
  mutation addPost($description: String!, $imageUrl: String!) {
    createPost(description: $description, imageUrl: $imageUrl) {
      id
      description
      imageUrl
    }
  }
`;

const CreatePostWithMutation = graphql(addPost, {
  props: ({ ownProps, mutate }) => ({
    addPost: ({ description, imageUrl }) => (
      mutate({
        variables: { description, imageUrl },
        updateQueries: {
          allPosts: (state, { mutationResult }) => {
            const newPost = mutationResult.data.createPost;
            return {
              allPosts: [...state.allPosts, newPost]
            };
          }
        }
      })
    )
  })
})(CreatePost);

export default CreatePostWithMutation;