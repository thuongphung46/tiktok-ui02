import { useState } from 'react'
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from 'components/Button';

const cs = classNames.bind(styles);

function App() {
	const history = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history('/login')

		}
	}

	return (
		<div className={cs('container-register')}>
			<div className={cs('form-register')}>
				<div>
					<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
				className={cs('input')}
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
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
				<Button primary type= "submit" value="Register">Register</Button>
				
			</form>
				</div>
			</div>
		</div>
		
	)
}

export default App