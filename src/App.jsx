import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import PageRoutes from './router';
import Header from 'components/header';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename="ReactPress">
        <Header />
        <PageRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
