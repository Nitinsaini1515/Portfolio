import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div>
{/* header */}
<div>

  <h2>Get in touch</h2>
<h1>Have Something in Mind</h1>
<h2>Have a project, idea or opportunity? Let's build something amazing together.</h2>
</div>


<div>

  <form action="/post">
  
  <label htmlFor="name">Full Name</label>
  <input type="text" id= "name" required placeholder='Enter your name ' />

  <label htmlFor="email">Email</label>
  <input type='email' id= "email" required placeholder='Enter your email' />


  <label htmlFor="phoneNumber">Phone number</label>
  <input type="number" id= "phoneNuber" placeholder='Enter your Phone no: ' />

<label htmlFor="selection">Work Type</label>
    <select id="course" name="course">
    <option value="cse">Computer Science</option>
    <option value="ece">Electronics</option>
    <option value="me">Mechanical</option>
    <option value="ce">Civil</option>
</select>
  <label htmlFor="textArea">Your Message</label>
  <textarea name="textArea" id="textArea">

    this is your message area
  </textarea>
<input type="submit" value="Send Message" />
  </form>
</div>
      </div>
      
    </>
  )
}

export default ContactMe
