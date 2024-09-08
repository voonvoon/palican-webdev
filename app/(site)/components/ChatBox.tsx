"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdChat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import moment from "moment";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const now = moment().format("LLL");

  // Function to send the message to WhatsApp
  const sendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/60183795728?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div
      className={`fixed bottom-0 right-0 m-4 z-10 transition-all duration-500 ${
        isOpen ? "h-48 w-80" : "h-12 w-40"
      } bg-gray-800 text-white rounded-t-lg shadow-lg flex flex-col ${
        isOpen ? "" : "cursor-pointer hover:scale-105 hover:shadow-xl"
      }`}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div className="flex items-center justify-between p-4 h-12 bg-gray-700 rounded-t-lg">
        <span className="w-full">
          {isOpen ? (
            <div className="flex items-center justify-between">
              {" "}
              Welcome to chat.. {"   "}
              <MdChat size={20} />
            </div>
          ) : (
            <div className="flex items-center justify-between">
              {" "}
              Let&apos;s chat..! <RiCustomerService2Fill size={20} />
            </div>
          )}
        </span>
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-red-500"
          >
            <IoMdClose size={20} />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="flex-1 flex flex-col p-2">
          <div className="text-white-600 text-xs flex items-center justify-start mb-1">
            {now}
          </div>
          <textarea
            className="flex-1 p-2 bg-gray-700 text-white rounded-md resize-none focus:outline-none"
            placeholder="Ask Pelican Webdev anything...."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="mt-2 p-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
            onClick={sendMessage}
          >
            Send Via <FaWhatsapp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
