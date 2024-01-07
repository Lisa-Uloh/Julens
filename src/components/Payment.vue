<template>
    <div>
      <h1>Payment Page</h1>
      <button @click="makePayment">Pay with Paystack</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Payment',
    data() {
      return {
        paystackPublicKey: 'your_paystack_public_key' // Replace with your Paystack Public Key
      };
    },
    methods: {
      makePayment() {
        let handler = PaystackPop.setup({
          key: this.paystackPublicKey,
          email: 'customer_email@example.com', // Replace with customer's email
          amount: 10000, // Amount in kobo
          currency: 'NGN',
          callback: (response) => {
            alert('Payment successful. Reference: ' + response.reference);
            // Here you can call your backend to verify the payment or to do further processing
          },
          onClose: () => {
            alert('Transaction was not completed');
          },
        });
        handler.openIframe();
      }
    },
    mounted() {
      // Load Paystack script on mount
      let script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      document.head.appendChild(script);
    }
  };
  </script>
  