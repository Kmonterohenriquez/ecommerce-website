import React from 'react'
import picture from '../../img/showcase.jpg'
import './Showcase.sass'
const Showcase =()=>{
    return(
        <div className="Showcase">
            <img src={picture} alt=""/>
            <div className="content ">
                <h1>Aaron <br/>is all you need</h1>
                <p>Simplicity, carried to an extreme, becomes elegance.<br/> <span>- Jon Franklin</span></p>
                <button>Shop now</button>
            </div>
        </div>
    )
}

export default Showcase