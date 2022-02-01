import * as React from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';

function App() {
  const [lastEntry, setLastEntry] = React.useState([]);

  return (
    <div>
      <Header />
      <Form setLastEntry={setLastEntry}/>
      <List lastEntry={lastEntry}/>  
    </div>
  );
}

export default App;