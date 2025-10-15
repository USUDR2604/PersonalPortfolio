import React from "react";
import "./CSS/SkillTagging.css";        // optional: styles below
import logoMap from "./logoMap";

const getLabel = (item) =>
  typeof item === "string" ? item : (item?.name ?? item?.label ?? "");

const getLogoSrc = (item) => {
  const key = typeof item === "object" ? item.logo : undefined;
  return key && logoMap && logoMap[key] ? logoMap[key] : null;
};

const SkillTagging = ({ items = [], title }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="skilltag-section">
      {title && (
        <div className="skilltag-header">
          <h5 className="text-bold">{title}</h5>
        </div>
      )}

      <div className="skilltag-container">
        {items.map((it, idx) => {
          const label = getLabel(it);
          const logoSrc = getLogoSrc(it);
          return (
            <div className="skilltag-badge" key={`skilltag-${label || idx}`}>
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt={label || "logo"}
                  className="skilltag-icon"
                  loading="lazy"
                />
              )}
              <span className="skilltag-text">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillTagging;
