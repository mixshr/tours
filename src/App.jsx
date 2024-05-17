import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import tour from "./Tour";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      console.log(tours)
      setIsLoading(false)
      setTours(tours)
    } catch (e) {
      console.log(e)
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return<main>
      <div className='title'>
        <h2>No tours left</h2>
        <button type='button' className='btn' style={{marginTop: '2rem'}} onClick={() => {fetchTours()}}>
          Refresh
        </button>
      </div>
    </main>
  }

  return <main><Tours tours={tours} removeTour={removeTour}/></main>
}

export default App
