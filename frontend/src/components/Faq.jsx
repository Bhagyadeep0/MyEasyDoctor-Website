import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "How do I book an appointment?",
      answer:
        "To book an appointment, visit our website and follow these steps: Select the “Book Appointment” option. Choose your preferred doctor or specialist.    Select the date and time slot. Provide your contact details and any relevant information. Confirm your booking.",
    },
    {
      question: "Can I reschedule or cancel an appointment?",
      answer:
        "Yes, you can reschedule your appointment by logging into your account and selecting the “Reschedule” option. Please do so at least 24 hours before the scheduled appointment.",
    },
    {
      question: "Can I get my money back after an appointment is canceled ?",
      answer:
        "Yes, you can get your money after an appointment is canceled. But you need to cancel it at least 24 hours before the scheduled appointment.",
    },
    {
      question: "How do I find a specific doctor or specialist?",
      answer:
        "Use the search bar on our website to find doctors by name, specialty, or location",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, online payments. Payment details will be provided during the booking process.",
    },
  ];
  const [inView, setInView] = useState(Array(faqData.length).fill(false));

  const toggleView = (index) => {
    const updatedView = [...inView];
    updatedView[index] = !updatedView[index];
    setInView(updatedView);
  };

  return (
    <section>
      <div className="w-full h-full container mx-auto space-y-5 py-10">
        <div className="text-center">
          <h1 className="h1 leading-none">
            FA<span className="text-red-500">Q</span>
          </h1>
          <p className="p capitalize">Questions? We have answers</p>
        </div>
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              className="bg-blue-300 px-3 py-2 w-full rounded-xl"
              key={index}
            >
              {/* questions */}
              <button
                className="flex items-center overflow-hidden w-full justify-between"
                onClick={() => toggleView(index)}
              >
                <span className="text-2xl font-[600] leading-tight">{item.question}</span>
                <span className="transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className={`transition-all duration-300 ease-in-out ${
                        inView[index] ? "opacity-100" : "opacity-0"
                      }`}
                      stroke={inView[index] ? "red" : "blue"}
                      d="M2 12h20M12 12H2"
                    />
                    <path
                      className={`transition-all duration-300 ease-in-out ${
                        inView[index] ? "opacity-0" : "opacity-100"
                      }`}
                      stroke={inView[index] ? "red" : "blue"}
                      d="M2 12h20M12 2v20"
                    />
                  </svg>
                </span>
              </button>
              {/* answers */}
              <div
                className={`grid overflow-hidden transition-all duration-700 ease-in-out ${
                  inView[index]
                    ? "grid-rows-[1fr] opacity-100 py-5"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-[25px]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
