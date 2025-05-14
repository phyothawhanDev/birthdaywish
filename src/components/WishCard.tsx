import React, { useState, useEffect } from "react";
import { Heart, Stars, Sparkles } from "lucide-react";
import "../styles/WishCard.css";

const WishCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Generate random balloon positions
  const generateBalloons = (count: number) => {
    return Array.from({ length: count }, (_, index) => {
      const left = Math.random() * 100; // Random left position (0% to 100%)
      const delay = Math.random() * 5; // Random animation delay (0s to 5s)
      return (
        <div
          key={index}
          className="balloon"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        ></div>
      );
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 500);

    setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
  }, []);

  return (
    <div className="wish-card-container">
      {showConfetti && (
        <>
          <div className="confetti"></div>
          <div className="balloons">{generateBalloons(15)}</div>{" "}
          {/* 15 balloons */}
        </>
      )}

      <div className={`wish-card ${isOpen ? "open" : ""}`}>
        <div className="card-front">
          <Stars className="star-icon top" size={32} color="#fff" />
          <Heart className="heart-icon" size={48} fill="#fff" color="#fff" />
          <Sparkles className="star-icon bottom" size={32} color="#fff" />
        </div>
        <div className="card-inside">
          <div className="card-decoration top"></div>
          <h1 className="wish-title">
            Hey, HappyBirthday <br></br>My Beautiful Wiffy{" "}
          </h1>
          <p className="wish-message">
            <br></br>Here's to more laughs, hugs, and beautiful memories with
            you.<br></br> I love you endlessly."
          </p>
          <div className="card-decoration bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
