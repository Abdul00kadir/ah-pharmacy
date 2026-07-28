"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2, AlertCircle, Sparkles, Send, ShieldCheck } from "lucide-react";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "IN",
    phone: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      setStatus("Please accept the terms & privacy policy.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json().catch(() => ({ success: false }));

      if (response.ok && result.success) {
        setStatus("Message sent successfully! Our team will contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "IN",
          phone: "",
          message: "",
          agree: false,
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center">
      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 w-full items-stretch">
        
        {/* Form Container (Cols 7) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold mb-3 border border-emerald-300/40 dark:border-emerald-800/50">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact & Direct Consultations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Have questions about our medicines, bulk orders, or treatment guidance? Submit your query below.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    First Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number <span className="text-emerald-500">*</span>
                </label>
                <div className="flex rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500/40 focus-within:border-emerald-500 transition-all">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="px-3.5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 outline-none cursor-pointer"
                  >
                    <option value="IN">IN (+91)</option>
                    <option value="UK">UK (+44)</option>
                    <option value="US">US (+1)</option>
                    <option value="CA">CA (+1)</option>
                  </select>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="flex-1 px-4 py-3 bg-transparent text-slate-900 dark:text-white text-sm outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we assist your health journey?"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm outline-none resize-y focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                />
                <label htmlFor="agree" className="text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                  I agree to the terms and privacy policy for submitting this inquiry.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/20 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
              </button>

              {/* Status Notice Toast */}
              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 ${
                    status.includes("successfully") 
                      ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40"
                      : "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300/40"
                  }`}
                >
                  {status.includes("successfully") ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  )}
                  <span>{status}</span>
                </motion.div>
              )}

            </form>
          </div>
        </motion.div>

        {/* Side Portal Banner Container (Cols 5) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 relative rounded-3xl overflow-hidden shadow-xl hidden md:flex flex-col justify-between p-8 bg-slate-950 text-white border border-slate-800"
        >
          <img
            src="/enqry.png"
            alt="AH Pharmacy Enquiry"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />

          <div className="relative z-10 flex justify-between items-center">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[11px] font-extrabold uppercase tracking-wider">
              AH Pharmacy
            </span>
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>

          <div className="relative z-10 bg-slate-950/70 backdrop-blur-xl p-6 rounded-2xl border border-white/15 mt-auto space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Healthcare Assistance</span>
            </div>
            <h3 className="text-xl font-bold">Direct Pharmacist Support</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our specialists provide guidance on medicine dosages, formulation queries, bulk pricing, and custom healthcare consultations.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
