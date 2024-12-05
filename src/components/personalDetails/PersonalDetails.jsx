import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PersonalDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, to, date, busId, selectedSeats } = location.state;

  const [passengers, setPassengers] = useState(
    selectedSeats.map(() => ({ name: "", age: "", gender: "" }))
  );

  const [contactDetails, setContactDetails] = useState({
    email: "",
    phone: "",
  });

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleContactChange = (field, value) => {
    setContactDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", {
      state: {
        from,
        to,
        date,
        busId,
        selectedSeats,
        passengers,
        contactDetails,
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Passenger Details
      </h1>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8"
      >
        {passengers.map((passenger, index) => (
          <div key={index} className="mb-8 pb-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-4">
              Passenger {index + 1}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`name-${index}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id={`name-${index}`}
                  value={passenger.name}
                  onChange={(e) =>
                    handlePassengerChange(index, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`age-${index}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Age
                </label>
                <input
                  type="number"
                  id={`age-${index}`}
                  value={passenger.age}
                  onChange={(e) =>
                    handlePassengerChange(index, "age", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <div className="flex space-x-4">
                  {["Male", "Female", "Other"].map((gender) => (
                    <label key={gender} className="flex items-center">
                      <input
                        type="radio"
                        value={gender}
                        checked={passenger.gender === gender}
                        onChange={() =>
                          handlePassengerChange(index, "gender", gender)
                        }
                        className="mr-2"
                        required
                      />
                      {gender}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={contactDetails.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={contactDetails.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Proceed to Payment
        </button>
      </motion.form>
    </div>
  );
};

export default PersonalDetails;
