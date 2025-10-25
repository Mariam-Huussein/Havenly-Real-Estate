import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRealEstateById } from "../API/realEstateService";

const BookingCard = ({ booking, propertyId }) => {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState(null);


  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getRealEstateById(propertyId);
        setProperty(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching property:", error);
        toast.error("Error fetching property:", error);
      }
    };
    fetchProperty();
  }, [propertyId]);

  return (
    <>
      {!loading && (

          <Link
            className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer  max-w-sm bg-white"
            to={`/listing/${booking.realEstateId}`}
          >

            <div className="p-4">
              <div className="flex">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {booking.realEstateTitle}
                </h5>
              </div>
              <div className="mb-3 font-mal text-gray-700">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Propert Type:</h5>
                  <p>{property.propertyType}</p>
                </div>
              </div>
              <div className="mb-3 font-mal text-gray-700">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Location:</h5>
                  <p>{property.address}</p>
                </div>
              </div>
              <div className="mb-3 font-mal text-gray-700">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Guests:</h5>
                  <p>{booking.guest}</p>
                </div>
              </div>
              <div className="mb-3 font-mal text-gray-700">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Total:</h5>
                  <p>{booking.totalPrice} $</p>
                </div>
              </div>
              {/* Booking Summary */}
              <div className="mb-3 font-mal text-gray-700">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Check-In:</h5>
                  <p className="break-all">
                    {" "}
                    {new Date(booking.startDate).toDateString()}
                  </p>
                </div>
              </div>
              <div className="mb-3 font-mal text-gray-700">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Check-Out:</h5>
                  <p className="break-all">
                    {" "}
                    {new Date(booking.endDate).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
      )}
    </>
  );
};

export default BookingCard;
