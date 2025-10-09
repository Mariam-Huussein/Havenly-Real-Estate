import React from "react";
import Title from "./Title";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "Lightning-Fast Booking",
      answer:
        "Designed for speed — instant search and seamless property viewing.",
    },
    {
      question: "Fully Customizable Homes",
      answer:
        "Easily change layouts, features, and designs to fit your lifestyle.",
    },
    {
      question: "Responsive by Location",
      answer:
        "Every property is accessible by area — no extra effort required.",
    },
    {
      question: "Real Estate Powered",
      answer:
        "Backed using trusted property data — no extra agents or steps needed.",
    },
    {
      question: "Smart Home Support",
      answer:
        "All houses come ready with modern smart living features included.",
    },
  ];
  return (
    <>
      <section className="max-padd-container py-16 xl:py-22">
        {/* Container */}
        <div className="flex flex-col gap-y-12 xl:flex-row">
          {/* Image (Left Side) */}
          <div className="flex flex-1 justify-center">
            <div className="relative rounded-3xl overflow-hidden inline-block">
              <img
                alt="Frequently Asked Questions Image"
                src="/images/frequently-asked-questions.png"
                className="block w-full"
              />
              <div className="absolute top-5 left-5 right-5 border-yellow-50 border-solid border-2 bg-[#ffffffc9] p-3 rounded-2xl flex items-center gap-4 z-10">
                <div>
                  <h5 className="bold-16 text-sm mb-2">Trusted Real Estate Experts</h5>
                  <p className="text-xs bold-12">
                    Trust, clarity, and simplicity are at the core of everything
                    we do to make your property journey easy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Content (Right Side) */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 text-left">
              <p className="text-secondary text-sm font-medium mb-5 text-left align-start">
                Homes Made for Living
              </p>
              <h1 className="text-3xl font-semibold">
                Simplifying Your Property Search Every Step
              </h1>
              <p className="text-sm text-slate-500 mt-2 pb-8">
                From finding the right location to finalizing the deal, we
                ensure your real estate journey is smooth, efficient, and
                fulfilling.
              </p>
              {faqs.map((faq, index) => (
                <div
                  className="border-b border-slate-200 py-4 cursor-pointer w-full"
                  key={index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">{faq.question}</h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openIndex === index ? "rotate-180" : ""
                      } transition-all duration-500 ease-in-out`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="#1D293D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                      openIndex === index
                        ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                        : "opacity-0 max-h-0 -translate-y-2"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrequentlyAskedQuestions;
