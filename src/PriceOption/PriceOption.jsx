import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-blue-500 text-white rounded-md p-4 flex flex-col ">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-600 p-2 w-full font-bold rounded-lg hover:bg-green-900">Buy Now</button>
    </div>
  );
};

export default PriceOption;
