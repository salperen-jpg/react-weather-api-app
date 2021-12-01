import './App.css';
import Title from './Components/Title';
import SearchForm from './Components/SearchForm';
import Weather from './Components/Weather';
import { useGlobalContext } from './Components/context';

function App() {
  const { weather } = useGlobalContext();
  return (
    <main className={`warm`}>
      <Title />
      <SearchForm />
      <Weather />
    </main>
  );
}

export default App;
