import { playfair } from "@/app/ui/fonts";

const ServicePriceItem = ({ title, price }) => {
  return (
    <div className="detail-price py-4 flex justify-between items-baseline">
      <div className="price-name shrink-0 pr-8">
        <h5 className="text-xl text-left">{title}</h5>
      </div>
      <div className="price-dots w-full border-b border-slate-400 border-dotted"></div>
      <div className="price-number shrink-0 pl-8">
        <h5 className="text-xl text-right">{price}</h5>
      </div>
    </div>
  );
};

export default ServicePriceItem;
