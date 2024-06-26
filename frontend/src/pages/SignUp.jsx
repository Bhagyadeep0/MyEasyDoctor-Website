import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isDoctor: "",
    gender: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //custom validation msg
  const validateForm = (name, value) => {
    switch (name) {
      case "name":
        if (!value) {
          return "Name is required";
        } else if (value.length >= 20) {
          return "Name is too Long.";
        }
        break;
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
      case "isDoctor":
        if (!value) {
          return "Please select if you are a doctor";
        }
        break;
      case "gender":
        if (!value) {
          return "Gender is required";
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
        <h3 className="text-2xl font-bold text-center">New Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.name ? "border-red-500" : "border-blue-300"
              }`}
              placeholder="Name"
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs italic">{formErrors.name}</p>
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
          <div className="mt-4">
            <label className="block">Are you a Doctor?</label>
            <div className="flex">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="isDoctor"
                  value={true}
                  checked={formData.isDoctor === "true"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="m-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isDoctor"
                  value={false}
                  checked={formData.isDoctor === "false"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="m-2">No</span>
              </label>
            </div>
            {formErrors.isDoctor && (
              <p className="text-red-500 text-xs italic">
                {formErrors.isDoctor}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label className="block">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none ${
                formErrors.gender ? "border-red-500" : "border-blue-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formErrors.gender && (
              <p className="text-red-500 text-xs italic">{formErrors.gender}</p>
            )}
          </div>
          <div>
           <NavLink to="/login"> <p className="text-[15px] my-3 text-blue-500">Already have an account?</p></NavLink>
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

export default SignUp;
