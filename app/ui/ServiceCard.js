import { playfair } from "@/app/ui/fonts";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col items-center">
      <img src={`/icons/${icon}`} alt={title} className="w-12 h-12 mb-4" />
      <h3 className={`${playfair.className} text-xl font-bold mb-2`}>{title}</h3>
      <p className="text-gray-700 leading-relaxed text-center font-light ">{description}</p>
    </div>
  );
};

export default ServiceCard;