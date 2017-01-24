import React from 'react';

const withTags = (TagComponent, { propName } = { propName: undefined }) => (text) => {
  const words = text.split(' ');
  return(
    <span>
      {words.map((word, idx) => {
        
        const resultWord = `${word} `;

        if(_isTag(word)){
          const props = {
            [propName]: word,
            key: idx
          };
          return <TagComponent {...props}>{resultWord}</TagComponent>;
        }

        return resultWord;

      })}
    </span>
  );
};

function _isTag(word){
  return word.length > 2 && word[0] === '#';
}

export default withTags;