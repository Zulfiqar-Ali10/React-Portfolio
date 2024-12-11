import React from 'react'

export default function Contact() {
    return (
        <>
            <main className='wrapper'>
                <section className="section" id="contact">
                    <div className="top-header">
                        <h1>Get in touch</h1>
                        <span>Do you have a project in your mind, contact me here</span>
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
                            <div className="form-control">
                                <div className="form-inputs">
                                    <input type="text" className="input-field" placeholder="Name" />
                                    <input type="text" className="input-field" placeholder="Email" />
                                </div>
                                <div className="text-area">
                                    <textarea placeholder="Message" defaultValue={""} />
                                </div>
                                <div className="form-button">
                                    <button className="btn3">
                                        Send <i className="uil uil-message" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>)
}
