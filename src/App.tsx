import React from 'react';
import './App.scss';
import {useTestFetchQuery} from './services/test-api/test-api-service';

function App() {
  const {data ,isLoading}= useTestFetchQuery("");
  return (
    isLoading ? <h1>Loading...</h1> :
    <h1>{data.name}</h1>
  );
}

export default App;
