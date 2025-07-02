export default function Form() {
  return (
    <div className="max-w-4xl mx-auto px-6  ">
      <form className="space-y-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6872e1]"
              placeholder="Ram"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6872e1]"
              placeholder="Khanal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6872e1]"
              placeholder="@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6872e1]"
              placeholder="+977-9841234567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            I'm Interested In
          </label>
          <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6872e1]">
            <option value="">Select an option</option>
            <option value="web-dev">Website Development</option>
            <option value="app-dev">App Development</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            rows={8}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6872e1]"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#fc7953] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5d68d8] transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
