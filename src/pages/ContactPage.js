import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/contactForm.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <input {...register("name", { required: true })} placeholder="Name" />
      {errors.name && <h5>Name is required</h5>}
      
      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <h5>Email is required</h5>}
      
      <textarea {...register("message", { required: true })} placeholder="Message"></textarea>
      {errors.message && <h5>Message is required</h5>}
      
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
