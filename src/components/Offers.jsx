import React from "react";

const Offers = () => {
  const offersData = [
    {
      id: 1,
      name: "Swasthya Sathi Card",
      title: "Get the benefit of Swasthya Sathi Card",
      desc: "Basic health cover for secondary and tertiary care up to Rs. 5 lakh per annum per family. Paperless, Cashless, Smart Card based. All pre-existing diseases are covered. There is no cap on the family size and Parents from both the Spouse are included.cost.",
      img: "/swasthya_sathi_card.jpg",
    },
  ];

  return (
    <section className="container py-[80px] mb-[60px] mx-auto">
      {offersData.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row flex-wrap justify-between items-center container mx-auto px-5 gap-10">
          {/* image */}
          <div className="flex-1 w-1/2  ">
            <img src={item.img} alt="img" className="lg:w-1/2 object-cover" />
          </div>
          {/* text */}
          <div className="flex-1 px-5">
            {/* title */}
            <h2 className="h2">{item.title}</h2>
            {/* desc */}
            <p className="break-words">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Offers;
