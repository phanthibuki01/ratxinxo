import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => {
        toast.success('fetch data successfully')
        setData(data)
      })
  }, [])

  return (
    <>
      <div>
        {data.map((item) => {
          return <div key={item.id}>{item.tilte}</div>
        })}
      </div>
    </>
  )
}

export default App
console.log(1)
