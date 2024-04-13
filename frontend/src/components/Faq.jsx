import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq = () => {
  const faqData = [
    { question: "Title", answer: "answer" },
    { question: "Title1", answer: "answer1" },
    { question: "Title2", answer: "answer2" },
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
          <h1 className="h1">FAQ</h1>
          <p className="p capitalize">Questions? We have answers</p>
        </div>
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              className="bg-blue-300 px-3 py-2 w-full rounded-xl"
              key={index}
            >
              <button
                className="flex items-center overflow-hidden w-full justify-between"
                onClick={() => toggleView(index)}
              >
                <span className="h2">{item.question}</span>
                <span className="transition-all duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                    className={`transition-all duration-300 ease-in-out ${inView[index]? "opacity-100" :"opacity-0" }`}
                      stroke={inView[index] ? "red" : "blue"}
                      d="M2 12h20M12 12H2"

                    />
                <path
                    className={`transition-all duration-300 ease-in-out ${inView[index]? "opacity-0" :"opacity-100" }`}
                      stroke={inView[index] ? "red" : "blue"}
                    d="M2 12h20M12 2v20"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-700 ease-in-out ${
                  inView[index]
                    ? "grid-rows-[1fr] opacity-100"
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
