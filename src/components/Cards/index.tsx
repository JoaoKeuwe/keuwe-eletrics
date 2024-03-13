import React from "react";
import './style.css'

interface CardStepByStepProps {
  image: string;
  title: string;
}

interface CardChargingProps {
  image: string;
  text: string;
}

export const CardStepByStep: React.FC<CardStepByStepProps> = ({
  image,
  title,
}) => {
  return (
    <div className="card-step">
      <img src={image} alt="image-card" />
      <h3>{title}</h3>
      <p>
        Lorem Ipsumis simply dummy text of the printing and typesetting
        industry. Lorem I
      </p>
    </div>
  );
};

export const CardCharging: React.FC<CardChargingProps> = ({
  image,
  text
}) => {
  return (
    <div className="card-charging">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  )
}

