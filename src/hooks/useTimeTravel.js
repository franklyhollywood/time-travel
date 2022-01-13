import { useState } from 'react';

export default function useTimeTravel() {
  const [dates, setDates] = useState([]);
  const [index, setIndex] = useState(-1);

  const current = index > -1 ? dates[index] : '';

  const save = (e) => {
    // In order to use event multiple times in fireEvent: Save event as variable.
    const { value } = e.target;

    setDates((previousState) => [
      ...previousState.slice(0, index + 1),
      value,
      ...previousState.slice(index + 1, dates.length + 1),
    ]);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const undo = () => {
    setIndex(index - 1);
  };
  const redo = () => {
    setIndex(index + 1);
  };
  return { save, undo, redo, current };
}
