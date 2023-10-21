import './App.css';
import Search from './components/search/search.js';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="App">
      <h1>Hello Candyland!</h1>
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
