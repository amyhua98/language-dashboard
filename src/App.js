import './App.css';
import React, {useState, useEffect} from 'react';
import { Card, Icon, Image, Dropdown } from 'semantic-ui-react';



function App() {
  const [watchers, setWatchers] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/create-react-app')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(data.watchers_count)
        setReact(data);
      });
  }, []);

  const setReact = (watchers_count) => {
    setWatchers(watchers)
  }

  return (
    <div>
      <h2 className="navbar">Github Language Dashboard</h2>
      <div className="card">
      <Card>
        <Card.Content>
        <Card.Header>React</Card.Header>
        </Card.Content>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        <span className='watchers'>Watchers: {watchers}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </div>
    </div>

  );
}

export default App;
