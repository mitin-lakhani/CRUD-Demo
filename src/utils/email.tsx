import emailjs from "@emailjs/browser";

export const sendOtpEmail = (email: any, otp: any) => {
  console.log('email', email)
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      email,
      passcode: otp,
      time: 'asd',
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );  
};
