import { Button, Center, Box, ButtonGroup } from '@chakra-ui/react';
import useTimeTravel from './hooks/useTimeTravel.js';

export default function App() {
  const { save, undo, redo, current } = useTimeTravel();
  return (
    <>
      <Center>
        <Box>
          <br />
          <p>
            <b>PLEASE SELECT A DATE</b>
          </p>
          <br />
          <div>
            <input type="date" value={current} onChange={save}></input>
            <br />
            <br />
            <ButtonGroup spacing="6">
              <Button onClick={undo}>UNDO</Button>
              <Button onClick={redo}>REDO</Button>
              <br />
              {current}
            </ButtonGroup>
          </div>
          <br />
        </Box>
      </Center>
    </>
  );
}
