// App.js
import React from 'react';
import GridRevealComponent from './Components/GridRevealComponent';

const App = () => {
  const imageFromGoogle = "image.png"; // Replace with a valid image URL


  return (
    <div>
      <h1>Grid Reveal Demo</h1>
      <GridRevealComponent 
        imageUrl={imageFromGoogle} 
        imageWidth="800px"
        imageHeight="500px"
        imageFit="fit"
        gridSize={20} 
        delay={300} 
        gridColor="#fff" 
        trigger="LayerOnView" 
        aspectRatio='16/9'
      />
    </div>
  );
};

export default App;
