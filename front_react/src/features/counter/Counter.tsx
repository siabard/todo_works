import type { RootState } from '@/app/store';
import './Counter.css';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { incrementByAmount } from './counterSlice';

function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => dispatch({ type: 'counter/increment' })}>
          Increment
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'counter/decrement' })}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(3))}>+2</button>
      </div>
    </div>
  );
}

export default Counter;
