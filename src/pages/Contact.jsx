import React from 'react'

const Contact = () => {
const handleFormSubmit = (e) => {
    const formInputData = Object.fromEntries(e.entries());
    console.log("Form submitted!", formInputData);
  }

  return (
    <div className='p-8 mx-[15rem]'>
      <h1>Contact Page</h1>
      <form action={handleFormSubmit} className='flex flex-col gap-4 mt-8'>
        <div className="flex flex-col gap-4">
          <input type="text" className='border border-gray-300 p-2 rounded text-white text-2xl' required={true}
            placeholder="Enter your name"
            name="username" />
          <input type="email" className='border border-gray-300 p-2 rounded text-white text-2xl' required={true}
            placeholder="Enter your email"
            name="email" />
          <textarea name="message" className='border border-gray-300 p-2 rounded text-white text-2xl'
            placeholder="Enter your message"
            cols={30} rows={10}></textarea>
          <button type="submit">Submit</button>

        </div>
      </form>
    </div>
  )
}

export default Contact;