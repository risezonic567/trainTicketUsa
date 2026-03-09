import { useState } from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 3–5 business days depending on your location.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, you can return products within 7 days if they are unused.",
  },
  {
    q: "Do you offer cash on delivery?",
    a: "Yes, COD is available in selected locations.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes, we use SSL encryption and trusted payment gateways.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section>
        <Helmet>
          <title>How to Book Train Tickets Online in USA | FAQ</title>
          <meta name="description" content="Learn how to book train tickets online in USA. Find answers about seat availability, ticket reservations, payments, and travel policies." />
          <link rel="canonical" href="https://www.trainticketsusa.com/disclaimer" />
        </Helmet> 
        <div className="max-w-5xl mx-auto px-4 py-12">

          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border rounded-xl overflow-hidden">

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full flex justify-between items-center p-4 md:p-5 text-left font-medium ${isOpen ? "bg-red-400 text-white" : ""}`}
                  >
                    <span>{item.q}</span>


                    <span
                      className={`inline-block text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                        }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className={`overflow-hidden px-4 md:px-5 pb-4 text-gray-600 ${isOpen ? "bg-blue-100 text-dark-400" : ""}`}>
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
