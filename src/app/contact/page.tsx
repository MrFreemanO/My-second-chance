import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // In a real application, this would send data to an automated backend (CRM, ticketing system)
    // For this demo, we'll just simulate a successful submission.
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
        Have questions or ready to start your website refresh journey? Reach out to us! We aim to automate responses for common queries and will get back to you swiftly for more specific needs.
      </p>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-500/30 text-green-300 border border-green-500 rounded-md">
          Thank you for your message! We have received your inquiry and will get back to you shortly.
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 bg-red-500/30 text-red-300 border border-red-500 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name <span className="text-red-400">*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address <span className="text-red-400">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional)</label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message <span className="text-red-400">*</span></label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
      <p className="mt-8 text-sm text-gray-400 text-center">
        For urgent matters, please refer to the support details provided upon signing up for one of our packages. Our automated systems handle initial inquiries to ensure a prompt acknowledgment.
      </p>
    </div>
  );
}

