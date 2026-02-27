// src/Components/ProfessionalSummaryInsert.jsx
import React from "react";
import data from "../DataFiles/data.json";
import "./CSS/ProfessionalSummary.css";

export default function ProfessionalSummaryInsert({
  title = "Professional Summary",
  summaryDetails = data?.summary_details || [],        // ✅ array of paragraphs
  cards = data?.Professional_summary_exp || []
}) {
  const hasSummary = Array.isArray(summaryDetails) && summaryDetails.length > 0;
  const hasCards = Array.isArray(cards) && cards.length > 0;

  if (!hasSummary && !hasCards) return null;

  return (
    <div className="psx">
      {/* Heading */}
      <div className="psx__head">
        <h2 className="psx__title">{title}</h2>
        <div className="psx__underline" />
      </div>

      {/* ✅ Paragraph Version (Above Blocks) */}
      {hasSummary && (
        <div className="psx__paraWrapper">
          {summaryDetails.map((p, idx) => (
            <p key={`psx-p-${idx}`} className="psx__paragraph">
              {p}
            </p>
          ))}
        </div>
      )}

      {/* ✅ Block Grid */}
      {hasCards && (
        <div className="psx__grid">
          {cards.map((c, i) => (
            <article key={`psx-card-${i}`} className="psx__card">
              <span className="psx__accent" />
              <h3 className="psx__cardTitle">{c.title}</h3>

              {Array.isArray(c.lines) && c.lines.length > 0 && (
                <ul className="psx__list">
                  {c.lines.map((t, j) => (
                    <li key={`psx-line-${i}-${j}`}>{t}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
