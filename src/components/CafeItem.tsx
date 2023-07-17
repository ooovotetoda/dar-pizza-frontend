import React, {useEffect, useState} from 'react';

interface CafeItemProps {
  photo: string,
  title: string,
  price: number,
  alt: string,
  btnId: string
}

const CafeItem = ({ photo, title, price, alt, btnId }: CafeItemProps) => {
  const [counterValue, setCounterValue] = useState(0)
  const [counterClicked, setCounterClicked] = useState(0)

  const handleIncreaseButtonClick = () => {
    setCounterValue(counterValue + 1)
    setCounterClicked(counterClicked + 1)
  }

  const handleDecreaseButtonClick = () => {
    setCounterValue(counterValue - 1)
    setCounterClicked(counterClicked + 1)
  }

  useEffect(() => {
    if (counterClicked) {
      const timer = setTimeout(() => setCounterClicked(0), 150)
      return () => clearTimeout(timer)
    }
  }, [counterClicked])

  return (
    <div className={"cafe-item"}>
      {counterValue ? <div className={"cafe-item-counter " + (counterClicked ? "cafe-item-counter-animated" : "")}>{counterValue}</div> : ""}
      <img src={photo} alt={alt} className={'cafe-item-photo'}/>
      <div className="cafe-item-label">
        <span className={"cafe-item-title"}>{title}</span>
        <span className={"cafe-item-price"}>{price}₽</span>
      </div>
      <div className="cafe-item-buttons">

        {counterValue ? <button className={" cafe-item-decrease-button"} id={btnId} onClick={handleDecreaseButtonClick}>-</button> : ""}
            <button className={counterValue ? "cafe-item-increase-button" : "cafe-item-add-button"} id={btnId} onClick={handleIncreaseButtonClick}>
              {counterValue ? "+" : "добавить"}
            </button>
      </div>
    </div>
  );
};

export default CafeItem;