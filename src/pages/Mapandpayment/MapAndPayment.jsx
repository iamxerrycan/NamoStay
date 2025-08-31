import React from 'react';
import LocationMap from '../../components/Map/LocationMap';
import PaymentOptions from '../../components/Payment/PaymentOptions';

export default function MapAndPayment() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        {/* <h2 className="text-3xl text-center font-bold mb-12 text-gray-800">
           & Payment
        </h2> */}
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Map <span className="text-blue-900"> & Payment</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Payment */}
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <PaymentOptions />
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
}
