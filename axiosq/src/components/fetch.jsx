import React { useState, useEffect } from 'react'
import style from './fetch.css'
import loading from './loading.jsx"

const Fetch =  => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    const response = axio.get("URL");
    catch (error) {
      setError(error);
    }finally {
      setLoading(false);
    }
  }, []);
  return (
      <div>
        <h2>API</h2>
        <ul>
          <li>
            <strong>{item.name / item.title}</strong>
          </li>
        </ul>
      </div>

  )
}

export default Fetch
