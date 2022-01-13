import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App.jsx';

describe('Calendar', () => {
  it('should change content based on input', () => {
    render(<App />);
    const redo = screen.getByText('REDO');
    const undo = screen.getByText('UNDO');
    const input = screen.getByLabelText('input');

    screen.getByText('PLEASE SELECT A DATE:');

    fireEvent.change(input, { target: { value: '2022-01-01' } });
    screen.getByText('2022-01-01');

    fireEvent.change(input, { target: { value: '2022-02-22' } });
    screen.getByText('2022-02-22');

    fireEvent.change(input, { target: { value: '2022-03-14' } });
    screen.getByText('2022-03-14');

    fireEvent.click(undo);
    screen.getByText('2022-02-22');

    fireEvent.click(undo);
    screen.getByText('2022-01-01');

    fireEvent.click(redo);
    screen.getByText('2022-02-22');

    fireEvent.change(input, { target: { value: '2022-04-04' } });
    screen.getByText('2022-04-04');

    fireEvent.click(undo);
    screen.getByText('2022-02-22');

    fireEvent.click(undo);
    screen.getByText('2022-01-01');

    fireEvent.click(redo);
    screen.getByText('2022-02-22');

    fireEvent.click(redo);
    screen.getByText('2022-04-04');

    fireEvent.click(redo);
    screen.getByText('2022-03-14');
  });
});
