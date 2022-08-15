import type { RootState } from '@/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import './Counter.css';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
