import { Resend } from "resend";
import { Email } from "./email";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async () => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "shanekenzler@gmail.com",
    subject: "Response from potential contacts",
    text: "I am so interested",
    react: <Email url="https://example.com" />,
  });
};

export default sendEmail;
