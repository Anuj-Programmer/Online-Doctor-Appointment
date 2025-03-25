import React, { useState } from "react";
import "./Help.css";
import Nav from "./Nav";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by logging into your account, selecting your preferred doctor, and choosing an available time slot.",
    },
    {
      question:
        "Can I book appointments for family members through my account?",
      answer:
        "Yes, you can add family members to your account and book appointments for them using your profile.",
    },
    {
      question:
        "What happens if my chosen doctor is unavailable for the selected time?",
      answer:
        "If your doctor is unavailable, you'll be notified immediately and can choose another available time or select a different doctor.",
    },
    {
      question: "How do I find a specific doctor or specialist?",
      answer:
        "Use our search feature to find doctors by name, specialty, or location. You can also filter results based on your needs.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption to protect all payment information and never store your full card details.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Your personal information is protected with advanced security measures and we comply with all data protection regulations.",
    },
    {
      question:
        "How can I change my password or update my account information?",
      answer:
        "You can update your account details in the 'My Account' section after logging in. Password changes require verification.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule appointments up to 24 hours before the scheduled time through your account dashboard.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
        <div className="header">
            <Nav/>
        </div>
      

      <main className="faq-main">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>

          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {item.question}
                  <span className="faq-toggle">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <hr />
            <p>Copyright © 2025 Curely. All Rights Reserved</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;