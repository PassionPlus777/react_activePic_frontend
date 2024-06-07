import React, { useEffect } from "react";
import { Button, Typography } from "antd";

const { Text } = Typography;

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

  return (
    <Button
      onClick={() => window.google.accounts.id.prompt()}
      className="google-button flex items-center justify-center w-full rounded-md"
    >
      <img src="icons/icon (28).png" alt="google" />
      <Text>Sign In with Google</Text>
    </Button>
  );
};

export default GoogleSignIn;
