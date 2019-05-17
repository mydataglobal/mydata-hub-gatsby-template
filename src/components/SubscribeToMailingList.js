import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SubscribeForm = () => {

  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)

        setEmail('')
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="submit-form">
      <input value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit" className="button special">Subscribe</button>

    </form>
  )
}

export default SubscribeForm;
