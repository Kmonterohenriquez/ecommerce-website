import React from 'react';
import { Link } from 'react-router-dom';
import './Login.sass';
import login_img from '../../img/login.jpg';
const Login = () => {
	return (
		<div className='Login'>
			<div className='Login-container container'>
				<form>
					<h1>Login</h1>
					<input type='email' name='email' placeholder='Example@aaron.com' />
					<input type='password' name='password' placeholder='Password...' />
					<button type='submit'>Login</button>
					<p>
						Not a member yet? <Link>Register</Link>
					</p>
				</form>
				<div className='image-container'>
					<img src={login_img} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Login;
