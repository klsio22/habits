import './styles/global.css';
import { Habit } from './components/Habit';

function App() {
  return (
    <div>
      <Habit completed={23} />
      <Habit completed={2} />
      <Habit completed={32} />
    </div>
  );
}

export default App;
