import { CharacterCounterProps } from "../../models";
import React from "react";
import './CharacterCounter.scss';

const CharacterCounter: React.FC<CharacterCounterProps> = ({ value, minLength, maxLength }) => {
  const currentLength = value.length; 
  const isBelowMin = currentLength < minLength;
  const isAboveMax = currentLength > maxLength;

  return (
    <div className="character-counter">
      {isBelowMin ? (
        <span className="txt-warning">+{minLength - currentLength} {/* characters required */}</span>
      ) : isAboveMax ? (
        <span className="text-danger">-{currentLength - maxLength} {/* characters over the limit */}</span>
      ) : (
        <span className="text-success">{currentLength} / {maxLength} {/* characters */}</span>
      )}
    </div>
  );
};

export default CharacterCounter;