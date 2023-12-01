import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false); 

  useEffect(() => {
    let timer;
    if (submitSuccess) {
      timer = setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitting(false); 
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitSuccess]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      email,
      message,
    };

    try {
      setSubmitting(true); // Set submitting state to true
      const response = await axios.post('https://lingomastersbackend.onrender.com/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSubmitSuccess(true);
        setTitle('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Form data submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <div className="container contact">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="Contact Us Illustration" />
                {submitSuccess ? (
                  <div>
                    <h2>Thank you!</h2>
                    <h4>Your request has been successfully submitted.</h4>
                  </div>
                ) : (
                  <>
                    <h2>Contact Us</h2>
                    <h4>We would love to hear from you !</h4>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="title">Title:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter Title"
                      name="title"
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="message">Message:</label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="message"
                      placeholder="Enter your message"
                      value={message}
                      onChange={handleMessageChange}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-outline-success" disabled={submitting}>
                      {submitting ? 'Submitting...' : (submitSuccess ? 'Form Submitted' : 'Submit')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
