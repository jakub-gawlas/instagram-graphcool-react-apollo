import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 2rem;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 1px dashed black;
  border-bottom: none;
  outline: none;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px dashed black;
  outline: none;  
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  background: none;
  border: 1px dashed black;
  outline: none;
  
  &:active {
    border-style: solid;
  }
`;

class CreatePost extends Component {
  onSubmit = () => {
    const imageUrl = this.input.value;
    const description = this.textarea.value;

    if(imageUrl.length > 5 && description.length > 3){
      this.props.addPost({ imageUrl, description });
      this.clearForm();
    }
  }

  clearForm = () => {
    this.input.value = '';
    this.textarea.value = '';
  }

  render(){
    return(
      <Container>
        <Input placeholder='Image URL' innerRef={(ref) => this.input = ref} />
        <TextArea innerRef={(ref) => this.textarea = ref} />
        <Button onClick={this.onSubmit}>
          Click to add post
        </Button>
      </Container>
    );
  }
}

export default CreatePost;