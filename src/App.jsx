//import React from 'react';
import './App.css';
import Badge from './components/Badge';

function App() {
    const colors = ['gray','red',  'yellow', 'green', 'blue','indigo','purple','pink']
    return (
        <>
            <h1>Your components go here</h1>
            <h2>Badges</h2>
            {colors.map((color) => (
                <Badge key={color} color={color}>
                    Badge {color}
                </Badge>
            ))}
             
        </>
    )
  }

export default App
