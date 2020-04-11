import React from 'react'
import './Contact.sass'

const Contact = () => {
    return (
        <div className='Contact'>
            <div className="Contact-container ">
                <h1>Contact us</h1>
                <form action="">
                    <div className='top-part'>
                        <div className='input-container'>
                            <label htmlFor="">Name</label>
                            <input type="name"/>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="">Email</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='bottom-part'>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div className='btn-container'>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
