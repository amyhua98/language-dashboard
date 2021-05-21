import './App.css';
import React, {useState, useEffect} from 'react';
import { Card, Icon, Image, Statistic} from 'semantic-ui-react';



function App() {
  const [watchers, setWatchers] = useState();

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
    setWatchers(watchers_count)
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
        <Statistic>
          <Statistic.Value>{JSON.stringify(watchers.watchers)}</Statistic.Value>
          <Statistic.Label>Watchers</Statistic.Label>
        </Statistic>
    </Card.Content>
    <Card.Content extra>
      <div>
        <Icon name='user' />
        22 Friends
      </div>
    </Card.Content>
  </Card>
      </div>
    </div>

  );
}

export default App;
