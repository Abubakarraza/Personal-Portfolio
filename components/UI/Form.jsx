import React, { useState } from 'react';
import classes from '../../styles/form.module.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/Config';
import { useToast, Spinner } from '@chakra-ui/react';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disable, setDisable] = useState(false);
  const toast = useToast();
  const collectionRef = collection(db, 'message');

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (!email || !name || !message) {
      return toast({
        title: 'Warning.',
        description: 'Please Fill all Field',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
    const data = await addDoc(collectionRef, {
      name,
      email,
      message,
    });
    const result = await data;
    if (result) {
      toast({
        title: 'Message Sent.',
        description:
          'Your Message is Sent to Abubakar. Abubakar will contact you through your Provided Email.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
    if (!result) {
      toast({
        title: 'Something Went Wrong',
        description: 'Please Try Again Later.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setDisable(false);
    setEmail('');
    setMessage('');
    setName('');
  };

  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button className="primary__btn" type="submit" disabled={disable}>
        {disable ? <Spinner color="#01d293" size="sm" /> : 'Send'}
      </button>
    </form>
  );
};

export default Form;
