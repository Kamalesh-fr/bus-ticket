import { Wifi, Utensils, Tv, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { Card, CardContent } from "@/components/ui/card";

const RouteCard = ({ from, to, duration, price }) => {
  const amenities = ["internet", "snacks", "tv", "charging"];
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">From</p>
              <p className="font-semibold">{from}</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>⋯⋯⋯⋯⋯</span>
              <span className="px-2 py-1 bg-gray-100 rounded">{duration}</span>
              <span>⋯⋯⋯⋯⋯</span>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-sm text-gray-500">To</p>
              <p className="font-semibold">{to}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-500">
            {amenities.includes("internet") && (
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4" />
                <span>Internet</span>
              </div>
            )}
            {amenities.includes("snacks") && (
              <div className="flex items-center space-x-2">
                <Utensils className="w-4 h-4" />
                <span>Snacks</span>
              </div>
            )}
            {amenities.includes("tv") && (
              <div className="flex items-center space-x-2">
                <Tv className="w-4 h-4" />
                <span>TV</span>
              </div>
            )}
            {amenities.includes("charging") && (
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4" />
                <span>Charging</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Rs. {price}</div>
            <Button className="bg-red-600 hover:bg-red-700">
              Reserve Seat
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

RouteCard.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RouteCard;
