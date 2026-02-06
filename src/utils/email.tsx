import emailjs from "@emailjs/browser";

export const sendOtpEmail = (email: any, otp: any) => {
  return emailjs.send(
    "service_zp2fgjj",
    "template_prhcfbd",
    {
      to_email: email,
      otp: otp,
    },
    "TiL_s0UZoZnO4-eGY"
  );  
};
