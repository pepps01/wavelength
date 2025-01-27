import * as Yup from 'yup';
  
  export const loginSchema = Yup.object({
    // name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });


  export const sendMoneySchema = Yup.object({
    send_amount: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  });