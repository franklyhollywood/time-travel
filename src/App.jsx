import { Button, Center, Box, ButtonGroup, Container } from '@chakra-ui/react';
import useTimeTravel from './hooks/useTimeTravel.js';

export default function App() {
  const { save, undo, redo, current } = useTimeTravel();
  return (
    <>
      <Center>
        <Box borderWidth="1px" padding="50px">
          <br />
          <span>
            <b>PLEASE SELECT A DATE:</b>
          </span>
          <br />
          {current}
          <br />
          <br />
          <div>
            <input
              aria-label="input"
              type="date"
              value={current}
              onChange={save}
            ></input>
            <br />
            <br />
            <ButtonGroup spacing="6">
              <Button onClick={undo}>UNDO</Button>
              <Button onClick={redo}>REDO</Button>
              <br />
            </ButtonGroup>
          </div>
          <br />
        </Box>
      </Center>
    </>
  );
}
