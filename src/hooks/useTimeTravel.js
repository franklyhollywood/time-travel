import { useEffect, useState } from 'react';

export default function useTimeTravel() {
  const [dates, setDates] = useState([]);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState('');

  useEffect(() => {
    if (index !== 0) {
      setCurrent(dates[index]);
    }
  }, [index]);

  const save = (event) => {
    setCurrent(event.target.value);
    setDates((previousState) => [...previousState, event.target.value]);
    setIndex(dates.length);
  };

  const undo = () => {};
  const redo = () => {};
  return { save, undo, redo, current };
}
