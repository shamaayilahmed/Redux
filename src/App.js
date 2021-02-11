import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import { bugAdded, bugRemoved, bugResolved } from './reducer/actions'

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Learning REDUX the right way 🚀</h1>

      <button onClick={() => dispatch(bugAdded("Bug 1"))}>🐛</button>
      <button onClick={() => dispatch(bugRemoved(1))}>🚫</button>
      <button onClick={() => dispatch(bugResolved(2))}>✔</button>

    </div>
  );
}

export default App;
