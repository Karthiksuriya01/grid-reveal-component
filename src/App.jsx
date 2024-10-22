// App.js
import React from 'react';
import GridRevealComponent from './Components/GridRevealComponent';

const App = () => {
  const image = "https://i1.wp.com/otakuorbit.com/wp-content/uploads/2021/03/Screenshot-2021-03-01-153440.png?resize=1536%2C841&ssl=1"; // Replace with a valid image URL


  return (
    <div>
      <h1>Grid Reveal Demo</h1>
      
      <h2>Layered Animation (Default)</h2>
      <GridRevealComponent 
        imageUrl={image} 
        imageWidth="800px"
        imageHeight="500px"
        imageFit="fit"
        gridSize={20} 
        delay={300} 
        gridColor="#000" 
        trigger="LayerOnView" 
        aspectRatio='16/9'
        animation="layered"
      />

      <h2>Center Animation</h2>
      <GridRevealComponent 
        imageUrl={image} 
        imageWidth="800px"
        imageHeight="500px"
        imageFit="fit"
        gridSize={20} 
        delay={300} 
        gridColor="#000" 
        trigger="LayerOnView" 
        aspectRatio='16/9'
        animation="center"
      />

      <h2>Random Animation</h2>
      <GridRevealComponent 
        imageUrl={image} 
        imageWidth="800px"
        imageHeight="500px"
        imageFit="fit"
        gridSize={10} 
        delay={0.5} 
        gridColor="#000" 
        trigger="LayerOnView" 
        aspectRatio='16/9'
        animation="random"
      />
    </div>
  );
};

export default App;
