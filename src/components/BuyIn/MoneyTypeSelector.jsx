function MoneyTypeSelector({ moneyType, setMoneyType }) {
  return (
    <div className="buyin__radio-group side-both">
      <label className="buyin__radio side-left">
        <input
          type="radio"
          name="moneyType"
          checked={moneyType === "real"}
          onChange={() => setMoneyType("real")}
        />
        <span className="radio-left" />
        Use real money
      </label>

      <label className="buyin__radio side-right">
        <input
          type="radio"
          name="moneyType"
          checked={moneyType === "cash"}
          onChange={() => setMoneyType("cash")}
        />
        <span className="radio-right" />
        Use cash money
      </label>
    </div>
  );
}

export default MoneyTypeSelector;
