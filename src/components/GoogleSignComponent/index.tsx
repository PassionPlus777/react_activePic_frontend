import React, { useEffect } from "react";

const GoogleSignIn: React.FC = () => {
  useEffect(() => {
    // Initialize the Google Sign-In client library
    window.google?.accounts.id.initialize({
      client_id:
        "4920220877-mtvqvu33ld00q2k21avba0f67u7hg0mq.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    // Render the Google Sign-In button
    window.google?.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
  }, []);

  function handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  return <div id="signInDiv"></div>;
};

export default GoogleSignIn;
