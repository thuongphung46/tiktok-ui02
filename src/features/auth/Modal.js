import { useContext } from 'react'
import { CloseButtonIcon } from '../../components/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { ModalBodyNameContext } from '../../components/Layout/components/Header'


import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cs = classNames.bind(styles);

function Modal({ children, onClose }) {
  const value = useContext(ModalBodyNameContext)

  return (
    <div className={cs('form-login-wrapper-w')}/*"z-50 fixed overflow-auto outline-none flex"*/>
      <div className={cs("fixed-inset-0")} ></div>
      <div
        className={cs('form-login-wrapper')}/*"rounded-lg m-auto relative h-4/5 bg-white overflow-hidden w-11/12 sm:w-4/6 md:w-3/6 lg:w-2/6"*/
      >
        {/* <div className={cs('form-login-container')}/*"relative h-full pt-12 flex flex-col"*/ }
          {value.navigateBack && (
            <div
              className={cs('icon-faChevronLeft')} /*"absolute top-5 left-5 text-xl cursor-pointer"*/
              onClick={(event) => {
                event.preventDefault()
                value.handleModalBodyName(value.navigateBack)
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}
          <div
            className={cs('icon-CloseButtonIcon')} /*"absolute top-5 right-5 rounded-full cursor-pointer flex justify-center items-center bg-black/5 w-10 h-10"*/
            onClick={onClose}
          >
            <CloseButtonIcon width={25} height={25} /> 
            {/* icon close */}
          </div>
          {children}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Modal
