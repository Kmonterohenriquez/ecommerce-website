import React from 'react';
import './PageTitle.sass'
const PageTitle = props => {
	return (
		<div className='PageTitle'>
            <div className="background"></div>
    <h1 data-text={props.title}  >{props.title}</h1>
            
		</div>
	);
};





export default PageTitle;
