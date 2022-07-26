import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Redux/counterReducer';
function App() {
  const counts = useSelector((state) => state.counterReducer.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>This is simple react app use redux state</h1>
      <h2>counter = {counts}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
