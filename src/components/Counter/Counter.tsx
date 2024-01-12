import {
  decrement,
  increment,
} from "../../redux/features/counter/countersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Counter = () => {
  const count = useAppSelector((state) => state.counters.count);
  const dispatch = useAppDispatch();

  const handleUnderLine: any = (count: number) => {
    let text = "";
    for (let item = 1; item <= count; item++) {
      text += item % 5 === 0 && item > 0 ? "/" : "-";
    }
    return text;
  };

  return (
    <div>
      <div className="container flex justify-center items-center h-screen">
        <div>
          <div className="font-bold text-2xl">{handleUnderLine(count)}</div>
          <button
            onClick={() => dispatch(increment())}
            className="p-4 text-green-500 text-2xl border rounded"
          >
            INCREMENT
          </button>
          <span className="font-bold text-black-800 text-2xl m-5">{count}</span>
          <button
            onClick={() => dispatch(decrement())}
            className="p-4 text-green-500 text-2xl border rounded"
          >
            DECREMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
