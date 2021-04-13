import React,{useState} from 'react';
import './css/style.css';
import Category from './components/Category';
import Jokes from './components/Jokes';
import SelectedCategory from './components/SelectedCategory';


function App() {

  let [jokeCategory,setJokeCategory] = useState('food')

  const handleJokeCategoryChange = (newJokeCategory)=>{
    setJokeCategory(newJokeCategory);
  }

  console.log(jokeCategory)


  return (
    <div className="app">
      <Category handleJokeCategoryChange={handleJokeCategoryChange} />
      <SelectedCategory jokeCategory={jokeCategory} />
      <Jokes jokeCategory={jokeCategory}/>
    </div>
  );
}

export default App;
