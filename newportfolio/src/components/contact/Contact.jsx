import {React, useState} from 'react'
import { Footer } from '../footer/Footer'
import './contact.css'
import axios from "axios"
import { Modal } from '../modal/Modal'
export const Contact = () => {

const [openModal, setOpenModal] = useState(false)



const [msg, setMsg] = useState('')
const [name, setName] = useState('')
const [email, setEmail] = useState('')

function openModalBtnn() {
  setOpenModal(true);
}

 const submit= async(e)=>{
  e.preventDefault()
  setMsg('');
  setName('');
  setEmail('');

  try {

      await axios.post("http://localhost:4000/", {
        name,
        email,
        msg
      })

  }
  catch(e) {
    console.log(e)
  }

  openModalBtnn()
}

  return (
    <section className="contact">
      <div className="content">
        <h2>Contac Me</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Exercitationem saepe eligendi ratione perspiciatis,
           porro suscipit sint nostrum eos quia ea tempore nam non quod numquam.
            Ducimus id quo ut minus.</p>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
            <div className="text">
              <h2>Address</h2>
              <p>Cameroon Buea</p>
            </div>
          </div>

           <div className="box">
            <div className="icon"><i class="fa-solid fa-phone"></i></div>
            <div className="text">
              <h2>Phone</h2>
              <p>+237652639844</p>
            </div>
          </div>

           <div className="box">
            <div className="icon"><i class="fa-solid fa-envelope"></i></div>
            <div className="text">
              <h2>Email</h2>
              <p>ekundimem@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactform">
            <form action="POST">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="" required="required" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="" required="required" value={msg} onChange={(e)=>{setMsg(e.target.value)}} ></textarea>
                <span>Type your message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" onClick={submit} value="Send" className='openModalBtn' />
              </div>
            </form>
          </div>

          {openModal && <Modal closeModal={setOpenModal}/>}
      </div>
      
      <Footer />
    </section>
  )
}
