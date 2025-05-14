import React, { useState, useRef } from "react";
import DarkScreen from "./DarkScreen";
import BirthdayCake from "./BirthdayCake";
import WishCard from "./WishCard";
import "../styles/BirthdayPage.css";
import birthdaySong from "../assets/audio/birthday-song.mp3";

const BirthdayPage: React.FC = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showWishCard, setShowWishCard] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLightClick = () => {
    setIsLightOn(true);
    setTimeout(() => {
      setShowCake(true);
      if (audioRef.current) {
        audioRef.current.volume = 0.5; // Set volume to 50%
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    }, 1500);
  };

  const handleCandleClick = () => {
    setShowWishCard(true);
  };

  return (
    <div className={`birthday-container ${isLightOn ? "light-on" : ""}`}>
      {!isLightOn && <DarkScreen onLightClick={handleLightClick} />}

      {showCake && !showWishCard && (
        <BirthdayCake onCandleClick={handleCandleClick} />
      )}

      {showWishCard && <WishCard />}

      <audio ref={audioRef} loop>
        <source src={birthdaySong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BirthdayPage;
