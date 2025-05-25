import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
        const response = await fetch("https://ryupunch.com/Api/contact_us_process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message
          }),
        });
    
        if (!response.ok) {
          throw new Error("Failed to submit. Please try again later.");
        }
    
        const result = await response.json();
        console.log("Success:", result);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        console.error(error);
        toast.error("There was an error . Please try again.");
      }

    
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        We're here to assist you with any queries related to PhD services. You can reach us using the form or contact us directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email</h2>
            <p className="text-[#be9d2e] font-medium">info@phdkings.in</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-[#be9d2e] font-medium">+91 8056078068</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">Working Hours</h2>
            <p className="text-gray-600">Mon–Sat, 9 AM – 7 PM IST</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md p-6 rounded-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d3af37] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
