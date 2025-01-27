import {create} from 'zustand';
import { persist,devtools } from 'zustand/middleware';

import axios from 'axios';
import { BASE_URL } from '@/apis/api';

interface FormStoreProps {
    submittedData: { name: string; email: string } | null;
    loading: boolean;
    error: string | null;
    setSubmittedData: (data: { name: string; email: string }) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    submitForm: (formData: { name: string; email: string }) => Promise<void>;
    auth:{
      firstname:string,
      lastname:string,
      email:string,
      token:string,
    },
    transaction:{
      sender_amount:number;
      reciever_amount:number; 
      email:string, 
      total_pay:number; 
      exchange_rate:number
    },
    recipient:{
      firstname:string,
      lastname:string,
      email:string,
      account_number:string,
      beneficiary_address:string,
      delivery_method:string,
      city:string,
      bank_name:string,
      recipient_country:string,
      state:string,
      postal_code:string,
    },
    profile:{
      phone: number,
    },
    setTotalPay:()=>void;
    setSenderAmount: (amount: number) => void;
    setEmail: (data: string) => void;
    setExchangeRate: (rate: number) => void;
    setTotalPayAmount: (amount: number) => void;
}

const axiosInstance = axios.create({
    baseURL: BASE_URL, 
    headers: {
      'Content-Type': 'application/json',
    },
  });


  export const useStore = create<FormStoreProps>()(
    devtools(
      persist(
        (set) => ({
          submittedData: null,
          loading: false,
          error: null,
          auth:{
            firstname: "",
            lastname: "",
            email: "",
            token: "",
          },
          profile:{
            phone: 0,
          },
          recipient:{
              firstname:"",
              lastname:"",
              email:"",
              account_number:"",
              beneficiary_address:"",
              delivery_method:"",
              city:"",
              bank_name:"",
              recipient_country:"",
              state:"",
              postal_code:"",
          },
          transaction: {
            sender_amount: 0.00,
            total_pay:0.00,
            exchange_rate:2.20,
            reciever_amount: 0.00,
            email:"",
          },
          setSubmittedData: (data) => set({ submittedData: data }),
          setLoading: (loading) => set({ loading }),
          setError: (error) => set({ error }),
          
          setEmail: (data:string) => set((state) => ({
            auth: {
              ...state.auth,
              email: data,
            }
          })),
          setSenderAmount: (amount:number) => set((state)=> ({
            transaction: {
              ...state.transaction,
              sender_amount: amount,
            }
          })),
          setTotalPayAmount: (amount:number) => set((state)=> ({
            transaction: {
              ...state.transaction,
              total_pay: state.transaction.exchange_rate * amount,
            }
          })),

          setTotalPay: () => set((state) => {
            const newTotalPay = state.transaction.sender_amount * state.transaction.exchange_rate;
            return {
              transaction: {
                ...state.transaction,
                total_pay: newTotalPay,
              },
            };
          }),
          // Update exchange rate and recalculate total pay
          setExchangeRate: (rate) => set((state) => {
            const newExchangeRate = rate;
            const newTotalPay = state.transaction.sender_amount * newExchangeRate;
            return {
              transaction: {
                ...state.transaction,
                exchange_rate: newExchangeRate,
                total_pay: newTotalPay,
              },
            };
          }),
          // Submit the form data via API and update store state
          submitForm: async (formData) => {
            console.log("form data", formData)
            set({ loading: true, error: null }); // Set loading and reset error
  
            try {
              const response = await axiosInstance.post('/', formData);
              // Set the data in the store if the submission is successful
              set({ submittedData: response.data, loading: false });
              console.log("response", response.data)

            } catch (err) {
              // Handle error
              set({ error: 'Failed to submit the form. Please try again.', loading: false });
              console.error('Error submitting form:', err);
            }
          },

          register: async (formData: any)=>{
            set({ loading: true, error: null });

            try {
              const response = await axiosInstance.post('/register', formData);
              // Set the data in the store if the submission is successful
              set({ submittedData: response.data, loading: false });
              console.log("response", response.data)

            } catch (err) {
              // Handle error
              set({ error: 'Failed to submit the form. Please try again.', loading: false });
              console.error('Error submitting form:', err);
            }
          },

          login: async (formData: any)=>{
            set({ loading: true, error: null });

            try {
              const response = await axiosInstance.post('/login', formData);
              // Set the data in the store if the submission is successful
              set({ submittedData: response.data, loading: false });
              console.log("response", response.data)

            } catch (err) {
              // Handle error
              set({ error: 'Failed to submit the form. Please try again.', loading: false });
              console.error('Error submitting form:', err);
            }
          },

          add_recipient: async (formData: any)=>{
            set({ loading: true, error: null });

            try {
              const response = await axiosInstance.post('/recipient/create', formData);
              // Set the data in the store if the submission is successful
              set({ submittedData: response.data, loading: false });
              console.log("response", response.data)

            } catch (err) {
              // Handle error
              set({ error: 'Failed to submit the form. Please try again.', loading: false });
              console.error('Error submitting form:', err);
            }
          },

          get_recipient: async ()=>{
            set({ loading: true, error: null });

            try {
              const response = await axiosInstance.post('/recipient/');
              // Set the data in the store if the submission is successful
              set({ submittedData: response.data, loading: false });
              console.log("response", response.data)

            } catch (err) {
              // Handle error
              set({ error: 'Failed to submit the form. Please try again.', loading: false });
              console.error('Error submitting form:', err);
            }
          },

          get_transaction: async ()=>{
            set({ loading: true, error: null });

            try {
              const response = await axiosInstance.post('/recipient/');
              // Set the data in the store if the submission is successful
              set({ submittedData: response.data, loading: false });
              console.log("response", response.data)

            } catch (err) {
              // Handle error
              set({ error: 'Failed to submit the form. Please try again.', loading: false });
              console.error('Error submitting form:', err);
            }
          },
        }),
        {
          name: 'form-data', 
        }
      ),
      { name: 'form-store' }
    )
);
