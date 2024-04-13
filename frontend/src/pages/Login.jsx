import { useState } from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //custom validation msg
  const validateForm = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
      case "password":
        if (!value) {
          return "Password is required";
        } else if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
        break;
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateForm(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Custom validation logic
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
      // Submit form logic
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl">
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form onSubmit={handleSubmit}>
        
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
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.email ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Email"
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs italic">{formErrors.email}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.password ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Password"
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs italic">
                {formErrors.password}
              </p>
            )}
          </div>
          <div>
           <NavLink to="/sign-up"> <p className="text-[15px] my-3 text-blue-500">Create an account.</p></NavLink>
          </div>
          <div className="flex items-baseline justify-between">
            <button
              type="submit"
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
