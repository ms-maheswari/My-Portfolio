import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current['user_name'].value.trim();
    const email = form.current['user_email'].value.trim();
    const message = form.current['message'].value.trim();

    var regname = /^[a-zA-Z\s]*$/;
    var regemail = /^\S+@\S+\.\S+$/;

    if (name === '' && email === '' && message === '') {
      swal('Opps.. !', 'Fill in the required fields', 'error');
      return;
    } else if (name.trim() === '' || regname.test(name) === false) {
      swal('Opps.. !', 'Invalid username', 'error');
      return;
    } else if (email.trim() === '' || regemail.test(email) === false) {
      swal('Opps.. !', 'Invalid email !', 'error');
      return;
    } else if (message === '') {
      swal('Oops.. !', 'Type your message!', 'error');
      return;
    }

    emailjs
      .sendForm('service_wqotjni', 'template_yy64seu', form.current, 'FtlQhGEHQ095ZzL8h')
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          swal('Success !', 'Mail sent successfully!..', 'success');
        },
        (error) => {
          console.log(error.text);
          swal('Oops.. !', 'Failed to send mail', 'error');
        }
      );
    form.current.reset();
    setFormError('');
  };

  return (
    <div className='w-full h-full bg-[#0a192f] flex justify-center items-center py-24 px-auto'>
      <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full px-4'>
          <div className='py-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Shoot me an email - mahes7439@gmail.com</p>
            {formError && <p className='text-red-500'>{formError}</p>}
          </div>
          <div className='py-2'>
            <div className='flex flex-col'>
              <label className='text-gray-100 mb-2'>Name</label>
              <input className='bg-[#ccd6f6] p-2 focus:border-gray-500 focus:outline-none border-2 rounded-md' type='text' placeholder='Name' name='user_name' />
            </div>
            <div className='flex flex-col my-4'>
              <label className='text-gray-100 mb-2'>Email</label>
              <input className='bg-[#ccd6f6] p-2 focus:border-gray-500 focus:outline-none border-2 rounded-md' type='text' placeholder='Email' name='user_email' />
            </div>
            <div className='flex flex-col'>
              <label className='text-gray-100 mb-2'>Message</label>
              <textarea className='bg-[#ccd6f6] p-2 focus:border-gray-500 focus:outline-none border-2 rounded-md' name='message' rows='6' placeholder='Message'></textarea>
            </div>
          </div>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit' value='Send'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
