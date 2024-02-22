//import React from 'react';
import './App.css';
import Badge from './components/Badge';
import Banner from './components/Banner';
import Card from './components/Card';


function App() {
    const badgesColors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
    return (
        <>
            <h1>Your components go here</h1>
            <h2>Cards</h2>
            <Card iconInfo={{ color: 'green', type: 'upload' }}>
                <h4>Title of the card</h4>
                <p>Chis is the text of the card</p>
            </Card>
            <h2>Banners</h2>
            <Banner title="Default banner" body="This is the default banner" />
            <Banner title="Warning banner" body="This is the warning banner" type="warning" />
            <Banner title="Success banner" body="This is the success banner" type="success" />
            <Banner title="Danger banner" body="This is the danger banner" type="danger" />
            <Banner title="Danger banner single line" type="danger" />
            <Banner type="danger" />
            <h2>Badges</h2>
            <p>
                Default square :<br />
                {badgesColors.map((color) => (
                    <Badge key={color} color={color}>
                        Badge {color}
                    </Badge>
                ))}
            </p>
            <p>
                Pill shape :<br />
                {badgesColors.map((color) => (
                    <Badge key={color} color={color} pill>
                        Badge {color}
                    </Badge>
                ))}
            </p>
        </>
    );
}

export default App;
