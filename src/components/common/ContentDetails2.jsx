import { useState } from "react";
import { FaEnvelope, FaShoppingCart } from "react-icons/fa";

export const ContentDetail = ({ content }) => {
  const { id, title, creator, category, price, previewUrl, type, description } = content;

  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSendMessage = () => {
    alert(`Sending message to ${creator.name}: ${message}`);
    setMessage("");
    setIsModalOpen(false);
  };

  const handlePurchase = () => {
    alert(`Processing payment of $${price} for ${title}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      {/* Title & Creator Info */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-gray-500">
            By <span className="text-blue-600 font-semibold">{creator.name}</span>
          </p>
          <span className="text-gray-300">|</span>
          <p className="text-sm text-gray-500">
            Category: <span className="font-semibold">{category}</span>
          </p>
        </div>
      </div>

      {/* Content Preview Section */}
      <div className="mb-6">
        {type === "audio" && (
          <audio controls className="w-full">
            <source src={previewUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
        {type === "image" && (
          <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
            {imageError ? (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span>Image not available</span>
              </div>
            ) : (
              <img
                src={previewUrl}
                alt={title}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
        {type === "text" && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        )}
      </div>

      {/* Price & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t pt-6">
        <div className="text-2xl font-bold text-gray-900">${price}</div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FaEnvelope className="text-gray-600" /> 
            <span>Contact Creator</span>
          </button>
          <button
            onClick={handlePurchase}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaShoppingCart />
            <span>Buy Now</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
            <h2 className="text-xl font-semibold mb-4">Message {creator.name}</h2>
            <textarea
              rows="4"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSendMessage} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};