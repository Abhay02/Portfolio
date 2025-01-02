const validateForm = (id, value) => {
  switch (id) {
    case "name":
      if (value.length === 0) return "Name is required";
      if (value.length < 3) return "Enter the Name atleast 3 character long";
      return "";
    case "email":
      if (value.length === 0) return "Email is required";
      if (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value))
        return "Email is Invalid";
      return "";
    case "phone":
      if (value.length === 0) return "Phone is required";
      if (!/^[0-9]*$/.test(value)) return "Phone number is invalid";
      if (value.length !== 10) return "Phone number must be 10 digits long";
      return "";
    case "message":
      if (value.length === 0) return "Message is required";
      return "";
    case "default":
      return "";
  }
};
export { validateForm };
