// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';
import { Taskbar } from '@workspace/mjw/dashboard/components';
import Button from '@mui/material/Button';

export function App() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe
        iste voluptate repellat cum quidem, id excepturi, natus minus dolores
        asperiores maiores hic ea! Quidem cumque soluta voluptatem optio totam!
      </p>
      <Taskbar />
      <Button variant="contained">Contained</Button>
    </>
  );
}

export default App;
