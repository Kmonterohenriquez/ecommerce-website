import React, { Component } from 'react';
import why_aaron from '../../img/why.jpg'
import './WhyAaron.sass'
class WhyAaron extends Component {
    state = {  }
    render() {
        return (
            <div className="WhyAaron">
                <div className=' center-container sm-container'>
                    <div className='right-side'>
                        <img src={why_aaron} alt=""/>
                    </div>
                    <div className='left-side'>
                        <h1>Why Aaron?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi aliquam, quam officia labore dolorum quae voluptatibus. Harum rerum molestiae itaque cum, fugit sequi suscipit aliquid, officiis, perferendis illum necessitatibus.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyAaron;