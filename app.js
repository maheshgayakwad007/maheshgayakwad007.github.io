function verifyOTP() {
  const code = document.getElementById("otp").value;

  if (!window.confirmationResult) {
    alert("Please request OTP first!");
    return;
  }

  window.confirmationResult.confirm(code)
    .then((result) => {
      const user = result.user;
      alert("Logged in successfully as " + user.phoneNumber);
      // Redirect to dashboard page
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("OTP verification failed:", error);
      alert("OTP verification failed: " + error.message);
    });
}
