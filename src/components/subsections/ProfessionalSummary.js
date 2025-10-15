// src/Components/ProfessionalSummaryInsert.jsx
import React from "react";
import data from "../DataFiles/data.json";
import "./CSS/ProfessionalSummary.css";

export default function ProfessionalSummaryInsert({
  title = "Professional Summary",
  cards = data?.Professional_summary_exp || []
}) {
  if (!Array.isArray(cards) || cards.length === 0) return null;

  return (
    <div className="psx">
      <div className="psx__head">
        <h2 className="psx__title">{title}</h2>
        <div className="psx__underline" />
      </div>

      <div className="psx__grid">
        {cards.map((c, i) => (
          <article key={i} className="psx__card">
            <span className="psx__accent" />
            <h3 className="psx__cardTitle">{c.title}</h3>
            <ul className="psx__list">
              {(c.lines || []).map((t, j) => <li key={j}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
