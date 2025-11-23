"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedHeader from "./Animationheader";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response) {
        toast.success("Email sent successfully!", { position: "top-right" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Error sending email.", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error sending email.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AnimatedHeader
        Children={
          <div id="Contact" className=" w-full text-white py-16">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold pb-16 text-center"
            >
              Contact <span className="text-[#01f3f4]">Me!</span>
            </h1>
            <form
              className="max-w-[800px] mx-auto text-center"
              onSubmit={handleSubmitForm}
            >
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 gap-5"
              >
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="caret-teal-400 bg-inputbg text-white"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-inputbg caret-teal-400 text-white"
                  placeholder="Last Name"
                />
              </div>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 container mx-auto p-3 sm:grid-cols-2 gap-5"
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-inputbg text-white caret-teal-400"
                  placeholder="Subject"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="bg-inputbg text-white caret-teal-400"
                  placeholder="Email"
                />
              </div>
              <div data-aos="fade-up" className="container mx-auto p-3">
                <textarea
                  name="message"
                  value={formData.message}
                  required
                  onChange={handleChange}
                  className="caret-teal-400 bg-inputbg text-white focus:outline-none w-full min-h-48"
                  placeholder="Type Your Message"
                ></textarea>
              </div>
              {/* <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Phone Number" /> */}
              <button
                type="submit"
                className={`bg-[#01f4f4ab] hover:bg-[#01f4f4c0] cursor-pointer rounded-md mt-4 px-4 py-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </form>
            <div className="mt-4">
              <ToastContainer />
            </div>
          </div>
        }
      />
    </div>
  );
}
