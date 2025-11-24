"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPaperPlane, FaUser, FaEnvelope, FaPen } from "react-icons/fa";
import InputCard from "./Input";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
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
        toast.success("Email sent successfully!", { position: "bottom-right" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Error sending email.", { position: "bottom-right" });
      }
    } catch (error) {
      toast.error("Error sending email.", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

const filedRow1 = [
  { icon: FaUser, name: "firstName", type: "text", onchange: handleChange, value: formData.firstName, placeholder: "First Name" },
  { icon: FaUser, name: "lastName", type: "text", onchange: handleChange, value: formData.lastName, placeholder: "Last Name" },
];

const filedRow2 = [
  { icon: FaEnvelope, name: "email", type: "email", onchange: handleChange, value: formData.email, placeholder: "Email" },
  { icon: FaPen, name: "subject", type: "text", onchange: handleChange, value: formData.subject, placeholder: "Subject" },
];

  return (
    <section
      ref={ref}
      id="Contact"
      className="relative py-20 px-6 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10 shadow-xl"
          onSubmit={handleSubmitForm}
        >
        {[filedRow1, filedRow2].map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {row.map((input, index) => (
              <InputCard
                key={index}
                loading={loading}
                name={input.name}
                Icon={input.icon}
                type={input.type}
                value={input.value}
                onChange={input.onchange}
                placeholder={input.placeholder}
              />
            ))}
          </div>
        ))}

          <div className="mb-8 relative group">
            <textarea
              name="message"
              value={formData.message}
              required
              onChange={handleChange}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800 transition-all duration-300 min-h-[150px] resize-y"
              placeholder="Your Message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </motion.form>
        <div className="mt-4">
          <ToastContainer theme="dark" />
        </div>
      </div>
    </section>
  );
}

