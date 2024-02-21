//import React from 'react';
import './App.css';
import Badge from './components/Badge';

function App() {
    const badgesColors = ['gray','red', 'yellow', 'green', 'blue','indigo','purple','pink']
    return (
        <>
            <h1>Your components go here</h1>
            <h2>Badges</h2>
            Default square : 
            {badgesColors.map((color) => (
                <Badge key={color} color={color}>
                    Badge {color}
                </Badge>
            ))}
             Pill shape : 
            {badgesColors.map((color) => (
                <Badge key={color} color={color} pill>
                    Badge {color}
                </Badge>
                ))}
        </>
    )
  }

export default App
