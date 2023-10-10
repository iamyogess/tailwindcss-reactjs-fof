import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gq0gyz5",
        "template_t68gx2h",
        form.current,
        "0oxUmcOl_3ZEgn0iE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contacts"
      className="max-w-[1140px] h-full w-full m-auto py-15 p-4"
    >
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://media.gettyimages.com/id/1437821111/photo/customer-service-happy-and-communication-of-woman-at-call-center-pc-talking-with-joyful-smile.jpg?s=612x612&w=0&k=20&c=2f63B3Y8hIyYlbj-GguxKAyFWn86G74TFHLiWHNWeYI="
          alt="/"
        />

        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2">
            <input
              className="border p-2 m-2 col-span-2"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
            {/* <input className="border p-2 m-2" type="text" placeholder="Last Name" /> */}
            <input
              className="border col-span-2 p-2 m-2"
              type="email"
              placeholder="Email"
              name="user_email"
            />
            {/* <input className="border p-2 m-2" type="tel" placeholder="Phone Number" /> */}
            {/* <input className="border p-2 m-2 col-span-2" type="text" placeholder="Address" /> */}
            <textarea
              className="border p-2 m-2 col-span-2"
              cols="30"
              rows="10"
              name="message"
            ></textarea>
            <button className="col-span-2 border m-2">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
