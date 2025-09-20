import React, { useState } from "react";
import "../styles/FAQSection.css";
import { FAQS } from "../constants/texts";

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="faq-section">
      <h2>FAQ</h2>
      <div className="faq-list">
        {FAQS.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <button className="faq-question" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              {faq.question}
            </button>
            {openIdx === idx && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
