import { useState } from "react";

// when users change key for text, key value gets replaced by the input of the user, reusable
const useFormDetails = (formObject) => {
  const [formDetails, setFormDetails] = useState(formObject);

  const handleChange = (key) => {
    return (event) => {
      const value = event.target?.value ?? event;
      setFormDetails((prevState) => ({ ...prevState, [key]: value }));
    };
  };

  return [formDetails, handleChange];
};

export default useFormDetails;
