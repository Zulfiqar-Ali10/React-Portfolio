import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        emailjs
            .send("service_rk90zr3", "template_l5yhv55", templateParams, "KzkHH7lY1phPShwwB")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setLoading(false);
            })
            .catch((err) => {
                console.error("FAILED...", err);
                toast.error("Error sending message. Please try again.");
                setLoading(false);
            });
    };

    return (
        <main className="wrapper">
            <section className="section" id="contact">
                <div className="top-header">
                    <h1>Get in touch</h1>
                    <span>Do you have a project in your mind? Contact me here!</span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                            <h2>
                                Find Me <i className="uil uil-corner-right-down" />
                            </h2>
                            <p>
                                <i className="uil uil-envelope" /> Email: zulfiqar.dev01@gmail.com
                            </p>
                            <p>
                                <i className="uil uil-phone" /> Tel: +03178842763
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <form className="form-control" onSubmit={handleSubmit}>
                            <div className="form-inputs">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    className="input-field"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-area">
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-button">
                                <button className="btn3" type="submit" disabled={loading}>
                                    {loading ? "Sending..." : "Send"} <i className="uil uil-message" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
