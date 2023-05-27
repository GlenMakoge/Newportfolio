import React from 'react'
import './modal.css'
export const Modal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className="modalContainer">
            <button className='bttnn' onClick={() => closeModal(false)}>X</button>
            <h1>Message Sent!!</h1>
        </div>
    </div>
  )
}
