"use client";

import React from "react";
import { Armchair } from "lucide-react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function SeatAllocation() {
  const [seats, setSeats] = React.useState(
    Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      row: Math.floor(i / 4) + 1,
      position: i % 4 < 2 ? "left" : "right",
      isAvailable: Math.random() > 0.3,
      isSelected: false,
    }))
  );

  const navigate = useNavigate();
  const handleSeatClick = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id && seat.isAvailable
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );
  };

  const handleConfirmSelect = () => {
    navigate("/details");
  };
  const selectedSeats = seats.filter((seat) => seat.isSelected);

  return (
    <Card className="max-w-xl mx-auto transform">
      <CardHeader>
        <CardTitle>Select Your Seats</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="flex flex-col items-center space-y-4">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((row) => (
              <div key={row} className="flex justify-between w-full">
                <div className="flex space-x-2">
                  {seats
                    .filter(
                      (seat) => seat.row === row && seat.position === "left"
                    )
                    .map((seat) => (
                      <SeatButton
                        key={seat.id}
                        seat={seat}
                        onClick={() => handleSeatClick(seat.id)}
                      />
                    ))}
                </div>
                <div className="flex space-x-2">
                  {seats
                    .filter(
                      (seat) => seat.row === row && seat.position === "right"
                    )
                    .map((seat) => (
                      <SeatButton
                        key={seat.id}
                        seat={seat}
                        onClick={() => handleSeatClick(seat.id)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="mt-6 flex flex-wrap justify-between items-start">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Armchair className="h-5 w-5 text-primary mr-2" />
              <span>Available</span>
            </div>
            <div className="flex items-center">
              <Armchair className="h-5 w-5 text-primary-foreground bg-primary p-0.5 rounded mr-2" />
              <span>Selected</span>
            </div>
            <div className="flex items-center">
              <Armchair className="h-5 w-5 text-muted-foreground mr-2" />
              <span>Unavailable</span>
            </div>
          </div>
          <div className="mt-4 w-full sm:w-auto">
            <p className="mb-2">
              Selected Seats: {selectedSeats.map((seat) => seat.id).join(", ")}
            </p>
            <Button onClick={handleConfirmSelect} className="w-full sm:w-auto">
              Confirm Selection
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SeatButton({ seat, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={!seat.isAvailable}
      className={cn(
        "flex flex-col items-center justify-center p-2 rounded-md transition-colors",
        seat.isSelected
          ? "bg-primary text-primary-foreground"
          : seat.isAvailable
          ? "bg-background hover:bg-secondary"
          : "bg-muted cursor-not-allowed",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )}
      aria-label={`Seat ${seat.id} ${
        seat.isAvailable
          ? seat.isSelected
            ? "Selected"
            : "Available"
          : "Unavailable"
      }`}
    >
      <Armchair
        className={cn(
          "h-8 w-8",
          seat.isSelected
            ? "text-primary-foreground"
            : seat.isAvailable
            ? "text-primary"
            : "text-muted-foreground"
        )}
      />
      <span className="mt-1 text-xs">{seat.id}</span>
    </button>
  );
}

// Prop validation for SeatButton component
SeatButton.propTypes = {
  seat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    position: PropTypes.oneOf(["left", "right"]).isRequired,
    isAvailable: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
