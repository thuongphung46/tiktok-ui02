import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from 'components/Button';

const cs = classNames.bind(styles);

const Login=({setCurrentUser}) =>{
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	async function loginUser(event) {
		event.preventDefault()
		console.log(event);

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		if (data.user) {

			localStorage.setItem('token', data.user)
			alert('Login successful');
			window.location.href = '/home'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className={cs('form-login')}>
			<h1>Login</h1>
			<form className={cs('form')} onSubmit={loginUser}>
				<input
				className={cs('input')}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
				className={cs('input')}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<Button primary type="submit" value="Login">Login</Button>
				<Button  to="/register" >Register</Button>
				
			</form>
		</div>
	)
}

export default Login