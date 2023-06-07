import { useState, useEffect } from 'react'
import './App.css';
import List from './List/List';
import Search from './Search/Search';


const data = [
  'test', 'test1', 'test2', 'test3', 'test4'
]

function App() {

  const [search, setSearch] = useState('')
  return (
    <div className='App'>
      <div className='App-header'>
        <Search value={search} onChange={(e) => setSearch(e.target.value)}> Find course:</Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
