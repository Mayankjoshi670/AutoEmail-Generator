"use client";  

const apiUrl = process.env.NEXT_PUBLIC_API_URL ||"http://localhost:4000/api/v1/mailAi";
import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    recipientName: "",
    email: "",
    purpose: "",
    keyPoints: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      
      setResponseMessage(result.result || "Success!");
    } catch (error) {
      setResponseMessage("Error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h1>
        <form onSubmit={handleSubmit}>
           
          <div className="mb-4">
            <label
              htmlFor="recipientName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Recipient Name
            </label>
            <input
              type="text"
              id="recipientName"
              name="recipientName"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter recipient name"
              value={formData.recipientName}
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

         
          <div className="mb-4">
            <label
              htmlFor="purpose"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Purpose
            </label>
            <select
              id="purpose"
              name="purpose"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select a purpose</option>
              <option value="meeting-request">Meeting Request</option>
              <option value="follow-up">Follow Up</option>
              <option value="thank-you">Thank You</option>
            </select>
          </div>

    
          <div className="mb-6">
            <label
              htmlFor="keyPoints"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Key Points
            </label>
            <textarea
              id="keyPoints"
              name="keyPoints"
              rows="4"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add key points for the email..."
              value={formData.keyPoints}
              onChange={handleChange}
              required
            />
          </div>
 
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            {isLoading ? <span>Loading...</span> : "Submit"}
          </button>
        </form>

        
        {responseMessage && (
  <div className="mt-4 text-center text-sm text-gray-700">
    
    <div
      dangerouslySetInnerHTML={{
        __html: responseMessage.replace(/\n/g, "<br />"),
      }}
    />
  </div>
)}
      </div>
    </div>
  );
}
