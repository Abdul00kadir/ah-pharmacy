"use client";
import { useState } from "react";

export default function EnquiryPage() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "IN",
        phone: "",
        message: "",
        agree: false
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.agree) {
            setStatus("Please accept terms & privacy policy.");
            return;
        }

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json().catch(() => ({ success: false }));

            if (response.ok && result.success) {
                setStatus("Message sent successfully.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    country: "IN",
                    phone: "",
                    message: "",
                    agree: false
                });
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("Server error. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section className="flex items-center justify-center py-12 px-4">
            <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">

                {/* LEFT SIDE - FORM */}
                <div className="p-5">
                    <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-200 text-center md:text-start mb-3 tracking-tight">
                        Get in touch
                    </h1>

                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <div>
                                <label className="block text-sm text-gray-500 mb-2">First name</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter first name"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Last name</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter last name"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="block text-sm text-gray-500 mb-2">Email id</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Enter email id"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block text-sm text-gray-500 mb-2">Phone number</label>
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors">
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-500 bg-white border-r border-gray-300"
                                >
                                    <option>IN</option>
                                    <option>UK</option>
                                    <option>US</option>
                                    <option>CA</option>
                                </select>

                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    required
                                    placeholder="Enter phone number"
                                    className="flex-1 px-3 py-3 text-sm outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="block text-sm text-gray-500 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Write your message"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none resize-y focus:border-indigo-500 transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                                className="w-5 h-5 cursor-pointer accent-indigo-500"
                            />
                            <label className="text-sm text-gray-500">
                                You agree to our terms and privacy policy.
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5"
                        >
                            {loading ? "Sending..." : "Send message"}
                        </button>

                        {status && (
                            <p className="mt-4 text-sm text-center text-indigo-500">
                                {status}
                            </p>
                        )}
                    </form>
                </div>

                {/* RIGHT SIDE - IMAGE (UNCHANGED) */}
                <div className="rounded-3xl p-10 relative min-h-[662px] w-full max-w-[520px] hidden md:flex flex-col justify-between overflow-hidden">
                    <img
                        src="enqry.png"
                        alt="3D shapes"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
