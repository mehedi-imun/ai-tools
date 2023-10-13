"use client"
import { useEffect } from 'react';

const MailchimpScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://chimpstatic.com/mcjs-connected/js/users/c8c4870109147447f0d23f027/4c3fac9b8826000c391ab0cbd.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default MailchimpScript;
