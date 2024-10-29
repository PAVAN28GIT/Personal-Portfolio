import React from "react";
import contacImg from "../../public/icons/contact-img.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { showToast } from "../utils/toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    showToast("Sending message...", "loading");

    if (
      !form.current.from_name.value ||
      !form.current.from_email.value ||
      !form.current.message.value
    ) {
      showToast("", "dismiss");
      showToast("Please fill in all fields", "error");
      return;
    }

    emailjs
      .sendForm("service_3eyu6pf", "template_37cju2v", form.current, {
        publicKey: "nGJOUXXcdWLABqoME",
      })
      .then(
        () => {
          showToast("", "dismiss");
          showToast(
            "Your message has been sent. We'll respond ASAP",
            "success"
          );
        },
        (error) => {
          showToast("", "dismiss");
          showToast(`Failed to send message${error}`, "error");
        }
      );
  };

  return (
    <div
      className="w-full bg-gradient-to-r from-pink-600 to-purple-500 md:p-10  flex flex-col md:flex-row items-center justify-center md:space-x-20"  
      id="contact"
    >
        <div className=" hidden md:flex md:size-2/4">
          <img src={contacImg} alt="" />
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-Montserrat text-center font-semibold py-5 ">
            Send a Message!!{" "}
          </h1>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 justify-center items-center rounded-md px-12 pb-10"
            action=""
          >
            <input
              className="px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black"
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
            />
            <input
              className="px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black"
              type="email"
              placeholder="Your Email Address"
              name="from_email"
            />

            <textarea
              className="px-4 w-96 h-40 resize-none py-3 bg-pink-100 outline-none rounded-lg text-black"
              type="message"
              placeholder="Your Message"
              name="message"
            />

            <input
              className="px-4 w-96 py-3 outline-none rounded-lg text-gray-200 text-2xl bg-zinc-900 hover:text-white hover:bg-black transition-all hover:scale-105"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
  );
};

export default Contact;
