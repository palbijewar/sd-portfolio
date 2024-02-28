"use client"
import React, { FormEvent, useRef, useState } from 'react';
import { BackgroundBeams } from "./ui/background-beams";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
  
      setForm(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          'service_yph42zx',
          'template_vibyfi8',
          {
            to_name: "Sourabh Dubey",
            from_email: form.email,
            to_email: "sourabhdubey0408@gmail.com",
            message: form.message,
          },
          '5-lF89h2lmd6hVQnQ'
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

    return (
      <div id="contact" className="relative min-h-screen bg-neutral-950">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="w-full rounded-md flex flex-col items-center justify-center antialiased p-10 z-10">
          <div>
            <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              Contact me
            </h1>
            <p className="text-center text-xl text-neutral-400 mt-4">
              I am here to help with any inquiries related to AI and ML projects.
            </p>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col items-center space-y-4 mt-10 z-10' 
            >
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-400"
                required
                style={{ zIndex: 1 }}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-400"
                rows={5}
                required
                style={{ zIndex: 1 }} 
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" 
                style={{ zIndex: 1 }}
              >
                {loading ? "Sending..." : "Send Message"} 
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
