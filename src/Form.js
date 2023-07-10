import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// class Form extends React.Component {
//   state = {
//     name: "",
//     enquiry: "",
//     country: "",
//   };

//   updateForm = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>Contact Form</h1>
//         <div className="container">
//           <label>Name:</label>
//           <input
//             name="name"
//             type="text"
//             value={this.state.name}
//             onChange={this.updateForm}
//             placeholder={this.props.msg}
//           />
//         </div>
//         <div className="container">
//           <label>Enquiry:</label>
//           <input
//             name="enquiry"
//             type="radio"
//             value="support"
//             checked={this.state.enquiry === "support"}
//             onChange={this.updateForm}
//           />
//           Support
//           <input
//             name="enquiry"
//             type="radio"
//             value="sales"
//             checked={this.state.enquiry === "sales"}
//             onChange={this.updateForm}
//           />
//           Sales
//           <input
//             name="enquiry"
//             type="radio"
//             value="marketing"
//             checked={this.state.enquiry === "marketing"}
//             onChange={this.updateForm}
//           />
//           Marketing
//         </div>
//         <div className="container">
//           <label>Country:</label>
//           <select
//             name="country"
//             value={this.state.country}
//             onChange={this.updateForm}
//           >
//             <option value="sg">Singapore</option>
//             <option value="my">Malaysia</option>
//             <option value="th">Thailand</option>
//           </select>
//         </div>
//         <button className="btn btn-primary" onClick={this.showAlert}>
//           Submit
//         </button>
//       </>
//     );
//   }
// }

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    enquiry: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const isFormIncomplete =
    !formData.name || !formData.enquiry || !formData.country;

  return (
    <>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Enquiry:</label>
          <input
            name="enquiry"
            type="radio"
            value="Support"
            checked={formData.enquiry === "Support"}
            onChange={handleChange}
          />
          <label className="form-label">Support</label>
          <input
            name="enquiry"
            type="radio"
            value="Sales"
            checked={formData.enquiry === "Sales"}
            onChange={handleChange}
          />
          <label className="form-label">Sales</label>
          <input
            name="enquiry"
            type="radio"
            value="Marketing"
            checked={formData.enquiry === "Marketing"}
            onChange={handleChange}
          />
          <label>Marketing</label>
        </div>
        <div>
          <label>Country:</label>
          <input
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        {submitted ? (
          <div>
            <h2>You submitted:</h2>
            <p>Name: {formData.name}</p>
            <p>Enquiry: {formData.enquiry}</p>
            <p>Country: {formData.country}</p>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isFormIncomplete}
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
};

export default Form;