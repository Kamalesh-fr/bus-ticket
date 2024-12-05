import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const mockBuses = [
  {
    id: 1,
    name: "LVT Express",
    departureTime: "08:00 AM",
    arrivalTime: "02:00 PM",
    duration: "6h 00m",
    price: 800,
    seatsAvailable: 32,
  },
  {
    id: 2,
    name: "LVT Sleeper",
    departureTime: "10:00 PM",
    arrivalTime: "06:00 AM",
    duration: "8h 00m",
    price: 1200,
    seatsAvailable: 24,
  },
  {
    id: 3,
    name: "LVT Deluxe",
    departureTime: "12:00 PM",
    arrivalTime: "07:00 PM",
    duration: "7h 00m",
    price: 1000,
    seatsAvailable: 28,
  },
];

const SearchResults = () => {
  //   const location = useLocation();
  const navigate = useNavigate();

  const handleViewSeats = (busId) => {
    navigate(`/seat-allocation`, { state: { busId } });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Search Results
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-xl font-semibold mb-2">Chennai to Nagercoil </p>
        <p className="text-gray-600">12/07/2024</p>
      </div>
      <div className="space-y-6">
        {mockBuses.map((bus) => (
          <motion.div
            key={bus.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-wrap items-center justify-between"
          >
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">{bus.name}</h2>
              <p className="text-gray-600">AC Seater</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <p className="font-semibold">
                {bus.departureTime} - {bus.arrivalTime}
              </p>
              <p className="text-gray-600">{bus.duration}</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <p className="font-semibold">₹{bus.price}</p>
              <p className="text-gray-600">
                {bus.seatsAvailable} seats available
              </p>
            </div>
            <div className="w-full md:w-1/4 text-right">
              <button
                onClick={() => handleViewSeats(bus.id)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                View Seats
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
