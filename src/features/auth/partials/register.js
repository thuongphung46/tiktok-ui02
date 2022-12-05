import { useState } from 'react'
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import * as registerService from '../../services/registerService'
import { registerService } from '../../../services/registerService'
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from 'components/Button';

const cs = classNames.bind(styles);

function App() {
	const history = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	
	const registerUser = () => {
		registerService
		  .login(email, password)
		  .then((data) => {
			if (data.meta && data.meta.token) {
			  localStorage.setItem('user', JSON.stringify(data))
			  alert('login successful!')
			  window.location.reload()
			} else {
			  alert('email or password is invalid! Please try again')
			}
		  })
		  .catch((error) => {
			console.log(error)
		  })
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