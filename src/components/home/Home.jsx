import {
  MapPin,
  ArrowLeftRight,
  Calendar,
  Search,
  UserCircle,
  Key,
  BookOpen,
  LogOut,
  Menu,
} from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
// import { Link } from "react-router-dom";
import LoginPage from "../loginPage/LoginPage";
import SignUpPage from "../signupPage/SignUpPage";
import { useNavigate } from "react-router-dom";
import { topRoutes } from "./dummy-data";
import RouteCard from "./route-card";
import {
  FaFacebook,
  FaInstagram,
  FaPaypal,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

const Home = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSwapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/buses");
    console.log("Searching with parameters:", {
      origin,
      destination,
      departDate,
    });
  };
  return (
    <div className="min-h-screen bg-white from-blue-100 to-purple-100 w-full">
      <nav className="bg-white shadow-lg sticky top-0 z-5">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Section: Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src={logo} className="h-10 w-10" />
                <div className="text-3xl font-semibold text-red-600">
                  LVT Buses
                </div>
              </div>
            </div>

            {/* Right Section: Navigation Links */}
            <div className="hidden md:flex items-end space-x-8">
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <a
                href="/view-ticket"
                className="text-gray-500 hover:text-gray-700"
              >
                View Ticket
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-700">
                Contact Us
              </a>
              <a href="/about" className="text-gray-500 hover:text-gray-700">
                About
              </a>
              <a href="/tours" className="text-gray-500 hover:text-gray-700">
                Tours
              </a>
              <a
                href="/agent-login"
                className="text-gray-500 hover:text-gray-700"
              >
                Agent Login
              </a>
            </div>
            {/* Right Section: Signup, Login, Agent Login, and User Dropdown */}
            <div className="flex items-end space-x-6">
              {/* Login Button with AlertDialog */}
              <AlertDialog
                open={isLoginModalOpen}
                onOpenChange={setIsLoginModalOpen}
              >
                {/* Button to open the modal */}
                <AlertDialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 font-medium transition-colors duration-200 ease-in-out">
                    Login/Signup
                  </Button>
                </AlertDialogTrigger>

                {/* Modal content */}
                <AlertDialogContent className="max-w-md">
                  <AlertDialogHeader>
                    {/* Modal Title with Close Button */}
                    <AlertDialogTitle className="text-center relative">
                      <span>Welcome</span>
                      <AlertDialogCancel asChild>
                        <span
                          className="absolute top-0 right-0 cursor-pointer text-gray-500 hover:text-gray-700 text-lg"
                          onClick={() => setIsLoginModalOpen(false)}
                        >
                          <IoMdClose />
                        </span>
                      </AlertDialogCancel>
                    </AlertDialogTitle>
                  </AlertDialogHeader>

                  {/* Tabs for Login and Signup */}
                  <Tabs defaultValue="login">
                    <TabsList className="flex justify-center mb-4 w-10px">
                      <TabsTrigger value="login" className="px-20 py-2">
                        Login
                      </TabsTrigger>
                      <TabsTrigger value="signup" className="px-20 py-2">
                        Signup
                      </TabsTrigger>
                    </TabsList>

                    {/* Login Tab Content */}
                    <TabsContent value="login">
                      <AlertDialogDescription>
                        <LoginPage />
                      </AlertDialogDescription>
                    </TabsContent>

                    {/* Signup Tab Content */}
                    <TabsContent value="signup">
                      <AlertDialogDescription>
                        <SignUpPage />
                      </AlertDialogDescription>
                    </TabsContent>
                  </Tabs>
                </AlertDialogContent>
              </AlertDialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative rounded-full bg-white p-1 text-gray-400"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                      K
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Kamalesh
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        kamalesh@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Key className="mr-2 h-4 w-4" />
                    <span>Change Password</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Bookings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w mx-auto py-6 sm:px-6 lg:px-8">
        <Card className="w-full max-w-6xl mx-auto bg-white mt-8 shadow-xl rounded-xl overflow-hidden">
          <CardContent className="p-6 pl-10 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Find Your Perfect Journey
            </h2>
            <div className="flex flex-col sm:flex-row items-end gap-4">
              <div className="relative w-full sm:w-[270px]">
                <Label htmlFor="origin" className="sr-only">
                  Origin
                </Label>
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black-600" />
                <Input
                  id="origin"
                  placeholder="Origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="pl-9"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleSwapLocations}
                className="hidden sm:flex shrink-0 bg-white -mx-2 text-black hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              >
                <ArrowLeftRight className="h-4 w-4" />
                <span className="sr-only">Swap locations</span>
              </Button>

              <div className="relative w-full sm:w-[270px]">
                <Label htmlFor="destination" className="sr-only">
                  Destination
                </Label>
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black-500" />
                <Input
                  id="destination"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-9  "
                />
              </div>

              <div className="w-full sm:w-auto">
                <Label htmlFor="depart-date" className="sr-only">
                  Departure Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="depart-date"
                      variant="outline"
                      className={cn(
                        "w-full sm:w-[270px] justify-start text-left font-normal",
                        !departDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4 text-black-500" />
                      {departDate ? (
                        format(departDate, "dd/MM/yyyy")
                      ) : (
                        <span>Select date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={departDate}
                      onSelect={setDepartDate}
                      initialFocus
                      className="bg-white rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full h-[40%] sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from=red-600 hover:to-red-600 text-white px-8 py-2 rounded-full font-semibold transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                <Search className="mr-2 h-4 w-4" />
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="py-16">
          <h2 className="text-center text-3xl font-bold mb-12">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Integrate secure payment gateways for users to pay for their
                tickets
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>
              <p className="text-gray-600">
                Offer options for the users to purchase refundable tickets with
                clear terms
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Get assistance anytime through chat, email, or phone
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <h2 className="text-center text-3xl font-bold mb-12">
            Top Search <span className="text-red-600">Routes</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRoutes.map((route) => (
              <RouteCard
                key={route.id}
                from={route.from}
                to={route.to}
                duration={route.duration}
                price={route.price}
                amenities={route.amenities}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 ">
        <div className="container px-2 max-w-[1500px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[100%]">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-3xl font-bold text-red-600 pl-10">Bus</div>
              <p className="text-sm pl-10">
                LVT Buses makes booking your tickets easy and convenient through
                our online platform. We aim to provide a comfortable and
                hassle-free experience for every passenger, ensuring a smooth
                and enjoyable journey.
              </p>
              <div className="flex space-x-4 ml-20 pt-5">
                <a href="#" className="bg-gray-800 p-2 rounded-full text-white">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className=" p-2 rounded-full text-white">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full text-white">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full text-white">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-red-600 text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ">
                    Reserve your ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ">
                    Create your account
                  </a>
                </li>
              </ul>
            </div>

            {/* Top Reserved Routes */}
            <div>
              <h3 className="text-red-600 text-lg font-semibold mb-4">
                Top Reserved Routes
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white ">
                    Chennai - Madurai
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ">
                    Coimbatore - Chennai
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ">
                    Chennai - Salem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white ">
                    Madurai - Tirunelveli
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-red-600  text-lg font-semibold mb-4">
                Support Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Help & Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-2 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mr-10">
              <RiMastercardFill className="text-2xl" />
              <FaPaypal className="text-2xl" />
              <RiVisaLine className="text-2xl" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
