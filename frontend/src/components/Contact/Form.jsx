// import framer motion
import { motion} from "framer-motion";
// react icons
import { MdSend} from "react-icons/md";

// import hooks
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    textarea: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //custom error message
  const validateForm = (name, value) => {
    switch (name) {
      case "name":
        if (!value) {
          return "Name is required";
        } else if (value.length > 20) {
          return "Name is too long, must be within 20 characters";
        }
        break;
      case "email":
        if (!value) {
          return "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
        case "number":
            if (!value) {
              return "number is required";
            } else if (value.length < 10 || value.length >= 11 ) {
              return "number is too short, should be in 10 digit format";
            }
      case "subject":
        if (!value) {
          return "subject is required";
        } else if (value.length < 5) {
          return "subject is too short, must be at least 5 characters";
        }else if (value.length > 20) {
            return "subject is too long, must be within 20 characters";
          }
        break;
      case "textarea":
        if (!value) {
          return "textarea is required";
        }
        break;
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateForm(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Custom validation logic here
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateForm(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setFormErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formData);
      // Submit form logic here
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 4, duration: 3 }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="px-8 w-full py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                formErrors.name ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Enter Your Name"
            />
            {formErrors.name && (
              <p className="error">{formErrors.name}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                formErrors.email ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Enter Your Email"
            />
            {formErrors.email && (
              <p className="error">{formErrors.email}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="number">
              Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
              className={`input w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                formErrors.number ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Enter Your Phone Number"
            />
            {formErrors.number && (
              <p className="error">
                {formErrors.number}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="subject">
              Subject
            </label>
            <input
              type="subject"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`input w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                formErrors.subject ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Enter Your Subject"
            />
            {formErrors.subject && (
              <p className="error">
                {formErrors.subject}
              </p>
            )}
          </div>
         
          <div className="mt-4">
            <label className="block" htmlFor="textarea">
              Message
            </label>
            <textarea
              type="textarea"
              name="textarea"
              id="textarea"
              rows={8}
              value={formData.textarea}
              onChange={handleChange}
              className={`w-full px-5 py-4 mt-2 border rounded-md focus:outline-none ${
                formErrors.textarea ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Enter Your Message..."
            />
            {formErrors.textarea && (
              <p className="error">
                {formErrors.textarea}
              </p>
            )}
          </div>
          <div className="flex items-baseline justify-between">
            <button
              type="submit"
              className="px-6 py-4 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              <MdSend />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
