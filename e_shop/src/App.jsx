import { useState, useEffect } from 'react';
import './App.css';
import Catagories from '../../e_shop/src/components/Catagories';

function App() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]); //useState[] is used to store json data
  useEffect(() =>{
    fetch("http://localhost:5000/posts")
    .then(response => response.json()) //promises for returning a response
    .then(data => {
      console.log(data);
      setResults(data);
    })
  },[])

  const renderCatagories = () => {
    return (results.map(cat =>
      <Catagories key={cat.id} id={cat.id} title = {cat.title} />
    ));
  }
  return (
    <>
    <header>
      My Store
    </header>
    <section>
      <nav>
      {
      renderCatagories()
        }
      </nav>
      <article>
        main area
      </article>
    </section>

    <footer>
      footer
    </footer>

    </>
  )
}

export default App;
