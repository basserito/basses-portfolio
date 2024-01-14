import React, { useRef } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  const emailRef = useRef(null);

  const handleEmailClick = () => {
    if (emailRef.current) {
      emailRef.current.click();
    }
  };

  return (
    <div className="contact-me-container">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a
          href="https://fi.linkedin.com/in/basant-khattab-193b16256"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="contact-icon" />
        </a>
        <a
          href="mailto:basant.khattab@gmail.com"
          ref={emailRef}
          style={{ display: 'none' }}
        >
          {/* Hidden anchor tag for triggering mailto link */}
        </a>
        <FaEnvelope className="contact-icon" onClick={handleEmailClick} />
      </div>
    </div>
  );
};

export default ContactMe;




