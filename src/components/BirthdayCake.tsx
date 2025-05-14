import React, { useState, useEffect } from "react";
import "../styles/BirthdayCake.css";

interface BirthdayCakeProps {
  onCandleClick: () => void;
}

const BirthdayCake: React.FC<BirthdayCakeProps> = ({ onCandleClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className={`cake-container ${isVisible ? "visible" : ""}`}>
      <div className="cake">
        <div className="plate"></div>
        <div className="cake-bottom"></div>
        <div className="cake-middle"></div>
        <div className="cake-top"></div>
        <div className="candle" onClick={onCandleClick}>
          <div className="flame" onClick={onCandleClick}></div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCake;
