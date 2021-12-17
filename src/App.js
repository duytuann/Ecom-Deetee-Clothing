import React from 'react';
import { Route, Routes, useParams, Link } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TopicsList = () => (
  <div>
    <Link to='/'>Home</Link>
    <h1>Topics List</h1>
  </div>
)

const TopicsDetail = (props) => {
  let { slug } = useParams()
  console.log(props.history)
  return (
    <div>
      <h1>Topics Detail {slug}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
        <Route path='/topics' element={<TopicsList />} />
        <Route path='/topics/:slug' element={<TopicsDetail />} />
      </Routes>
    </div>
  )
}

export default App;
