import React, { useRef, useState } from 'react'
import { z } from "zod";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

function ContactForm() {

    const form = useRef(null);

    const schema = z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Invalid email format"),
        phone: z.string().optional(),
        message: z.string().min(1, "Message is required"),
    });

    const parseSchema = (data) => {
        return schema.safeParse(data);
    }

    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const [errorState, setErrorState] = useState({
        path: [],
        message: ""
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContactInfo({
            ...contactInfo,
            [name]: value
        })
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
            from_name: `${contactInfo.firstName} ${contactInfo.lastName}`,
            from_email: contactInfo.email,
            to_name: "Aman Events",
            message: contactInfo.message,
        };

        try {
            const response = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                { publicKey: 'wNnF0Ak2otAYBSvNT' });
            console.log(
                'Email sent successfully!',
                response.status,
                response.text);
            toast.success('Email sent successfully!');
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error('Failed to send email. Please try again later.');
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const res = parseSchema(contactInfo);

        if (res.success) {
            console.log("Form Data:", contactInfo);
            // Send email here
            sendEmail(e);
            setErrorState({ path: [], message: "" }); // Clear error state on success
        } else {
            const error = res.error.issues[0];
            setErrorState({
                path: error.path, // This is an array
                message: error.message
            });
            console.error("Validation Errors:", res.error.issues);
        }
    };

    return (
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8">
            <form
                ref={form}
                onSubmit={(e) => submitHandler(e)}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={contactInfo.firstName}
                            onChange={(e) => changeHandler(e)}

                        />
                        {errorState.path.includes("firstName") && (
                            <p className="text-red-500 text-sm">{errorState.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={contactInfo.lastName}
                            onChange={(e) => changeHandler(e)}

                        />
                        {errorState.path.includes("lastName") && (
                            <p className="text-red-500 text-sm">{errorState.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={contactInfo.email}
                        onChange={(e) => changeHandler(e)}

                    />
                    {errorState.path.includes("email") && (
                        <p className="text-red-500 text-sm">{errorState.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={contactInfo.phone}
                        onChange={(e) => changeHandler(e)}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={contactInfo.message}
                        onChange={(e) => changeHandler(e)}

                    ></textarea>
                    {errorState.path.includes("message") && (
                        <p className="text-red-500 text-sm">{errorState.message}</p>
                    )}
                </div>

                <button
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm
