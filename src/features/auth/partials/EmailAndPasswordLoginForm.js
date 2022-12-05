import { useContext, useState } from 'react'
import { ModalBodyNameContext } from '../../../components/Layout/components/Header'
import * as authService from '~/services/authService'
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from 'components/Button';

const cs = classNames.bind(styles);

function EmailAndPasswordLoginForm() {
  const value = useContext(ModalBodyNameContext)
  // const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const loginUser = () => {
    authService
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
    <>
      <div className={cs('overflow-auto')} style={{ flex: '1 1 0%' }}>
        <div className={cs('wrapper-menu-level2')}/*"m-auto w-4/5"*/>
          <h3 className={cs('text-center')}/*"text-center text-2xl md:text-3xl lg:text-4xl font-bold my-4 mx-auto"*/>Log in</h3>

          <form onSubmit={loginUser}>
            <div className={cs('text-base')}/*"text-base font-semibold flex justify-between mb-2"*/>
              <label>Email or username</label>
              <a
                href="#/"
                className="font-semibold text-xs hover:underline text-black/60"
                onClick={(event) => {
                  event.preventDefault()
                  value.handleModalBodyName('login-with-phone')
                }}
              >
                Log in with phone
              </a>
            </div>
            {/* <div className="mb-2">
              <input
                className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                name="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username or email"
              />
            </div> */}
            <div className={cs('mb-2')}>
              <input
                className={cs('rounded')}
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px',fontSize:'20px' }}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Username or email"
              />
            </div>
            <div className={cs('mb-2')}>
              <input
                className={cs('rounded')}
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px', fontSize:'20px'}}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <a
              href="#/"
              className ={cs('font-semibold')}
              onClick = {(event) => {
                event.preventDefault()
                value.handleModalBodyName('reset-password-with-email')
              }}
            >
              Forget password?
            </a>
            <Button primary
              className={cs('mt-8')} /*"mt-8 border-none bg-primary text-white text-base leading-5 font-bold font-primary rounded flex items-center justify-center w-full cursor-pointer py-1.5 px-2"*/
              style={{
                minWidth: '120px',
                minHeight: '46px',
              }}
              type='submit'

              onClick={(e) => {
                e.preventDefault()
                loginUser()
              }}
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EmailAndPasswordLoginForm
