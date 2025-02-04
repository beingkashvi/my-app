"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How does this AI-powered resume builder work?",
    answer: "Our AI analyzes your input, suggests content, and formats your resume for maximum impact."
  },
  {
    question: "Is this resume builder free to use?",
    answer: "We offer both free and premium plans, with the free plan including basic templates and features."
  },
  {
    question: "Can I download my resume as a PDF?",
    answer: "Yes! You can download your resume in PDF, Word, or plain text format."
  }
];

export default function FAQ () {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-xl">
            <button
              className="flex items-center justify-between w-full p-4 text-left text-lg font-medium text-white hover:text-black bg-black hover:bg-white rounded-xl"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

