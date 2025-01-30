import { useState } from "react";
import { FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { sendSMS } from "../../services/api"; // Import API function

export const ContentDetail = ({ content }) => {
  const { id, title, creator, category, price, previewUrl, type, description } = content;
  const [message, setMessage] = useState(`You have an interested party in your product ${previewUrl} `);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ensure creator has a phone number
  const creatorPhone = creator.phone || "+254700000000"; // Fallback

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    try {
      const response = await sendSMS(creatorPhone, message);
      alert(response.message || "Message sent successfully!");
    } catch (error) {
      alert("Failed to send message: " + error.message);
    }

    setMessage("");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 m-4 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500">By <span className="text-blue-600 font-semibold">{creator.name}</span></p>

      <p className="mt-2 text-gray-700">Category: <span className="font-semibold">{category}</span></p>
      <p className="text-lg font-semibold mt-1">${price}</p>

      <div className="mt-4">
        {type === "audio" && <audio controls className="w-full"><source src={previewUrl} type="audio/mpeg" /></audio>}
        {type === "image" && <img src={previewUrl} alt={title} className="w-full h-60 object-cover rounded-lg" />}
        {type === "text" && <p className="bg-gray-100 p-4 rounded-lg text-sm">{description}</p>}
      </div>

      <div className="mt-6 flex gap-4">
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          <FaEnvelope /> Contact Creator
        </button>

        <button onClick={() => alert(`Processing payment of $${price} for ${title}`)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FaShoppingCart /> Buy Now
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-2">Send a Message</h2>
            <p className="text-gray-600 mb-4">Your message will be sent to {creator.name}.</p>
            <input type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-300 p-2 rounded-lg mb-3" />
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
              <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
