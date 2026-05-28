import { useEffect, useState } from "react";

const MIN_AMOUNT = 0.5;
const MAX_AMOUNT = 50;

function AmountControl({ amount, setAmount }) {
  const [inputValue, setInputValue] = useState(String(amount));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setInputValue(String(amount));
  }, [amount]);

  const clampAmount = (value) => {
    if (value < MIN_AMOUNT) return MIN_AMOUNT;
    if (value > MAX_AMOUNT) return MAX_AMOUNT;
    return value;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    const number = Number(value);

    if (
      value !== "" &&
      !Number.isNaN(number) &&
      (number < MIN_AMOUNT || number > MAX_AMOUNT)
    ) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  const handleInputBlur = () => {
    const number = Number(inputValue);

    if (inputValue === "" || Number.isNaN(number)) {
      setAmount(MIN_AMOUNT);
      setInputValue(String(clampedValue));
      setHasError(false);
      return;
    }

    const clampedValue = clampAmount(number);

    setAmount(clampedValue);
    setInputValue(String(clampedValue));
  };

  const handleMinClick = () => {
    setAmount(MIN_AMOUNT);
    setInputValue(String(MIN_AMOUNT));
  };

  const handleMaxClick = () => {
    setAmount(MAX_AMOUNT);
    setInputValue(String(MAX_AMOUNT));
  };

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);

    setAmount(value);
    setInputValue(String(value));
  };

  return (
    <>
      <div className="buyin__amount">
        <button
          className="buyin__green-button"
          type="button"
          onClick={handleMinClick}
        >
          Min $0.5
        </button>

        <label
          className={`buyin__field buyin__field--amount ${
            hasError ? "buyin__field--error" : ""
          }`}
        >
          <span>Amount</span>
          <input
            type="number"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step="0.5"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </label>

        <button
          className="buyin__green-button"
          type="button"
          onClick={handleMaxClick}
        >
          Max $50
        </button>
      </div>

      <input
        className="buyin__slider"
        type="range"
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step="0.5"
        value={amount}
        onChange={handleSliderChange}
        style={{
          "--progress": `${
            ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100
          }%`,
        }}
      />
    </>
  );
}

export default AmountControl;
