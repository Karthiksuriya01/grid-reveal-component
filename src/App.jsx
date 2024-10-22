// App.js
import React from 'react';
import GridRevealComponent from './Components/GridRevealComponent';

const App = () => {
  const imageFromGoogle = "https://i1.wp.com/otakuorbit.com/wp-content/uploads/2021/03/Screenshot-2021-03-01-153440.png?resize=1536%2C841&ssl=1"; // Replace with a valid image URL


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
