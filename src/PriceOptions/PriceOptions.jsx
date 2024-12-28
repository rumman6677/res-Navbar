import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      duration: "Monthly",
      features: ["Access to gym equipment", "Locker room access"],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 80,
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal training sessions (2 per month)",
        "Sauna and steam room access",
      ],
    },
    {
      id: 4,
      name: "VIP",
      price: 120,
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "Personal training sessions (4 per month)",
        "Sauna and steam room access",
        "Priority booking for fitness sessions",
        "Complimentary gym merchandise",
      ],
    },
    {
      id: 5,
      name: "Day Pass",
      price: 10,
      duration: "Single Day",
      features: ["Access to gym equipment", "Locker room access"],
    },
  ];

  return (
    <div className="m-12">
      {/* <h2 className="text-5xl">Best Price Option In The Town</h2> */}
      <div className="grid grid-cols-3 gap-6">
        {
        priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}>
          </PriceOption>))
        }
      </div>
    </div>
  );
};

export default PriceOptions;
