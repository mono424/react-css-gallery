import React from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
	const items = [
		"https://placeimg.com/640/480/people",
		"https://placeimg.com/640/480/arch",
		"https://placeimg.com/640/480/tech",
		"https://placeimg.com/640/480/nature",
	];

  return (
    <div className="App">
    	<Gallery items={items} />	
		</div>
  );
}

export default App;
