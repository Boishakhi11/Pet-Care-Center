import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { GrFormRefresh } from "react-icons/gr";

const BookAppointmnet = () => {
  const today = new Date().toISOString().split("T")[0];
  //console.log(today);
  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;

    toast("Appointment Booked Succesfully");
    form.reset();
  };
  return (
    <div data-aos="fade-up" className="mt-20 mb-15 space-y-5">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        Plan a <span className="text-primary">Visit </span> with Us
      </h1>
      <p className="text-center text-xl mb-5">Please Book an Appointment</p>

      {/*form*/}
      <div className="flex items-center justify-center bg-base-100 mt-10">
        <form
          onSubmit={handleBooking}
          className="fieldset bg-base-200 border-base-300 shadow-2xl rounded-box w-xs border p-6 space-y-1"
        >
          <label className="label">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input"
            placeholder="Name"
          />

          <label className="label">Phone Number</label>
          <input
            required
            name="phone"
            type="tel"
            className="input"
            placeholder="Phone Number"
          />

          <label className="label">Pet Name</label>
          <input
            required
            name="petName"
            type="text"
            className="input"
            placeholder="Pet Name"
          />

          <label className="label">Choose Service</label>
          <label className="select">
            <select name="service">
              <option>Grooming</option>
              <option>Clothing</option>
              <option>Training</option>
              <option>Walking</option>
            </select>
          </label>

          <label className="label">Select Date</label>
          <input
            required
            name="date"
            min={today}
            type="date"
            className="input"
          />

          <button type="submit" className="btn btn-primary text-xl mt-2">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmnet;
