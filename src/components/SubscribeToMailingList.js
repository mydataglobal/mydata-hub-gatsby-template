import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const SubscribeToMailingList = () => {

  const [email, setEmail] = React.useState();

  // 1. via `.then`
  const handleSubmit = e => {
    console.log()
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Subscribe</button>
    </form>
  )
}

export default SubscribeToMailingList;
