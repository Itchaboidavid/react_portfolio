import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5"
        id="contact"
      >
        <div className="text-center">
          <h2 className="primary-color text-4xl font-bold leading-tight">
            Contact me
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="mt-6 bg-[#161616] rounded-xl">
            <div className="p-10">
              <form action="https://getform.io/f/bgdyjlza" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email address"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id=""
                        rows="4"
                        placeholder="Pleave leave a message..."
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      />
                    </div>
                    <input type="hidden" name="_gotcha" />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
