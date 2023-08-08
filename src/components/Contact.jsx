import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] h-full w-full m-auto py-15 p-4">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://images.unsplash.com/photo-1503188991764-408493f288b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />

        <form>
          <div className="grid grid-cols-2">
            <input className="border p-2 m-2" type="text" placeholder="First Name" />
            <input className="border p-2 m-2" type="text" placeholder="Last Name" />
            <input className="border p-2 m-2" type="email" placeholder="Email" />
            <input className="border p-2 m-2" type="tel" placeholder="Phone Number" />
            <input className="border p-2 m-2 col-span-2" type="text" placeholder="Address" />
            <textarea className="border p-2 m-2 col-span-2" cols="30" rows="10"></textarea>
            <button className="col-span-2 border m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
