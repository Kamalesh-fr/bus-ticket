import { motion } from "framer-motion";

const tours = [
  {
    id: 1,
    name: "Chennai to Pondicherry Beach Tour",
    duration: "2 days",
    price: "₹2,999",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Madurai Temple Tour",
    duration: "3 days",
    price: "₹4,499",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Ooty Hill Station Getaway",
    duration: "4 days",
    price: "₹6,999",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Kodaikanal Nature Retreat",
    duration: "3 days",
    price: "₹5,499",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const Tours = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
        LVT Bus Tours
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
              <p className="text-gray-600 mb-4">Duration: {tour.duration}</p>
              <p className="text-blue-600 font-bold mb-4">
                Price: {tour.price}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
