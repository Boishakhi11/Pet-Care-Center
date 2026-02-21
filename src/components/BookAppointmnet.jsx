import React from "react";
import toast, { Toaster } from "react-hot-toast";

const BookAppointmnet = () => {
  const handleBooking = () => {
    toast("Appointment Booked Succesfully");
  };
  return (
    <div>
      <h1>
        Plan a <span className="text-primary">Visit </span> with Us
      </h1>
      <p>Please Book an Appointment</p>

      {/*form*/}
      <div className="flex items-center justify-center bg-base-100 mt-10">
        <fieldset className="fieldset bg-base-200 border-base-300 shadow-2xl rounded-box w-xs border p-6 space-y-1">
          <label className="label">Name</label>
          <input required type="text" className="input" placeholder="Name" />

          <label className="label">Phone Number</label>
          <input
            required
            type="tel"
            className="input"
            placeholder="Phone Number"
            pattern="[0-9]*"
            minLength="10"
            maxLength="10"
            title="Must be 10 digits"
          />

          <label className="label">Pet Name</label>
          <input
            required
            type="text"
            className="input"
            placeholder="Pet Name"
          />

          <label className="label">Choose Service</label>
          <label className="select">
            <select>
              <option>Grooming</option>
              <option>Clothing</option>
              <option>Training</option>
              <option>Walking</option>
            </select>
          </label>

          <label className="label">Select Date</label>
          <input required type="date" className="input" />

          <button onClick={handleBooking} className="btn btn-primary mt-2">
            Book Now
          </button>
        </fieldset>
        <Toaster />
      </div>
    </div>
  );
};

export default BookAppointmnet;
