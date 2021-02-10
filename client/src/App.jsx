import React from 'react';
import ReactDOM from 'react-dom';
import DataStructureRenderer from '../components/DataStructureRenderer';

const App = () => {
  return (
    <div>
      <h1>WELCOME TO REACT APP!</h1>
      <DataStructureRenderer />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;