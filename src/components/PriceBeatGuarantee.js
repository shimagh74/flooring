import React from "react";
import PageHeader from "./PageHeader";
import installImage from "../assets/img/HW8022-2.png";

const PriceBeatGuarantee = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header with image */}
      <PageHeader title="Price Beat Guarantee" imageSrc={installImage} />

      {/* Content section */}
      <div className="p-6 sm:p-12 lg:p-24">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            Price Beat Guarantee
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Maple Floors, we guarantee the best prices every day. Should you find a lower advertised price for a product that meets the following Terms & Conditions, we will happily match the price, and even better, we’ll beat it by 5%.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms and Conditions</h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>The product must be identical, matching brand, colour, and model number.</li>
            <li>The product must be currently advertised in print or via electronic media.</li>
            <li>The product must be from an Australian authorised dealer and in stock within Australia.</li>
            <li>The price of the product must include delivery fees, taxes, and charges.</li>
            <li>The price must be lower than ours on the day the price guarantee is requested.</li>
            <li>Excludes finance, installation, rebates, coupons, and loyalty rewards.</li>
            <li>Does not apply to unauthorised dealers' products.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Exclusions</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Proof of Price from auctions, stock liquidations, or marketplaces (e.g., eBay, Amazon).</li>
            <li>Non-stock items and large commercial quantities.</li>
            <li>Conditional prices or prices with promotions, financing, or bonuses.</li>
            <li>Competitor errors, display stock, or factory seconds.</li>
            <li>Resellers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceBeatGuarantee;
