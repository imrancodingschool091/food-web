import React, { useState } from 'react';
import "./Contact.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("https://food-web-wgol.onrender.com/api/contact", form);
      toast.success("🎉 Thanks for reaching out! We'll get back to you shortly.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="contact text-center text-danger fs-4 my-5">Get in Touch</h1>
      <div className="flex d-flex my-5">
        {/* Address Cards */}
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: 480, height: 200 }}>
          <div className="card-body my-2">
            <h5 className="card-title fs-5"><i className="fa-solid fa-location-dot mx-2 fs-4" />Address</h5>
            <p className="card-text my-3 fs-6">A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
          <div className="card-body my-2">
            <h5 className="card-title fs-5"><i className="fa-solid fa-phone mx-2" />Call us</h5>
            <p className="card-text my-3 fs-6">+1 5589 55488 55</p>
          </div>
        </div>
        <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
          <div className="card-body my-2">
            <h5 className="card-title fs-5"><i className="fa-solid fa-envelope mx-2" />Email Us</h5>
            <p className="card-text my-3 fs-6">info@example.com</p>
          </div>
        </div>
      </div>

      <div className="flex d-flex my-5">
        {/* Map Card */}
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: 500, height: 500 }}>
          <div className="card-body my-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.2312462919845!2d75.84796007485897!3d30.880191374513437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825313ade647%3A0x8221aeeb0002f9ba!2sANSH%20InfoTech!5e0!3m2!1sen!2sin!4v1738905636094!5m2!1sen!2sin"
              width={400} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: 600, height: 500 }}>
          <div className="card-body">
            <form className="row g-4 p-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <input type="text" className="form-control2" placeholder="Your Name" onChange={handleInput} value={form.name} name='name' />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control2" placeholder="Your Email" onChange={handleInput} value={form.email} name='email' />
              </div>
              <div className="col-12">
                <input type="text" className="form-control3" placeholder="Subject" onChange={handleInput} value={form.subject} name='subject' />
              </div>
              <div className="col-12">
                <textarea className="form-control1" placeholder="Message" onChange={handleInput} value={form.message} name='message' />
              </div>
              <div className="col-12"><br />
                <button type="submit" className="btn2">Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
