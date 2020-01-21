import React, {useState, useEffect} from 'react';
import './master.css';

function Gallery({ items = [], interval = 4000 }) {
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
		setInterval(() => { console.log(123);
			setIndex(state => (state + 1) % items.length);
		}, interval);
	}, []);
	
	return (
    <div className="Gallery">
    	<div className="Gallery-innerWrap">
			{ items.map((item, i) => <div key={item} className={ "Gallery-item" + (index === i ? " Gallery-item--selected" : "") } style={{ backgroundImage: `url(${item})` }}></div>) }
			</div>
		</div>
  );
}

export default Gallery;
