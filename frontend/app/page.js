export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h1>
        <form>
          {/* Recipient Name */}
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
              required
            />
          </div>

          {/* Email */}
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
              required
            />
          </div>

          {/* Purpose Dropdown */}
          <div className="mb-6">
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
              required
            >
              <option value="">Select a purpose</option>
              <option value="meeting-request">Meeting Request</option>
              <option value="follow-up">Follow Up</option>
              <option value="thank-you">Thank You</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
