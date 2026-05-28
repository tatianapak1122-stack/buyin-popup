import { useState } from "react";
import "./BuyIn.scss";

import MoneyTypeSelector from "./MoneyTypeSelector";
import AmountControl from "./AmountControl";
import TablesControl from "./TablesControl";

function BuyIn() {
  const [moneyType, setMoneyType] = useState("cash");
  const [amount, setAmount] = useState(25);
  const [tables, setTables] = useState(1);

  const handleOk = () => {
    alert(
      `Amount: ${amount.toFixed(2)}
Money type: ${moneyType}
Number of tables: ${tables}`,
    );
  };

  return (
    <div className="page">
      <div className="buyin">
        <button className="buyin__close" type="button">
          ×
        </button>

        <h1 className="buyin__title">Buy-In</h1>

        <MoneyTypeSelector moneyType={moneyType} setMoneyType={setMoneyType} />

        <div className="buyin__divider" />
        {/* ---------------------------------------------------------------------- */}
        <div className="buyin__row side-both">
          <div className="buyin__label side-left">
            <span className="buyin__icon buyin__icon--game" /> Game type:
          </div>
          <div className="buyin__value side-right">NL Hold’em&nbsp; 2/4</div>
        </div>

        <div className="buyin__row side-both">
          <div className="buyin__label side-left">
            <span className="buyin__icon buyin__icon--balance" /> Available
            balance:
          </div>
          <div className="buyin__value" />
        </div>

        <div className="buyin__balance-box">
          <div className="buyin__row buyin__row--small side-both">
            <span className="side-left">Real money:</span>
            <strong className="side-right">$80</strong>
          </div>

          {moneyType === "cash" && (
            <div className="buyin__row buyin__row--small side-both">
              <span className="side-left">Cash money:</span>
              <strong className="buyin__cash side-right">C$150</strong>
            </div>
          )}
        </div>

        <div className="buyin__row buyin__charge side-both">
          <div className="buyin__label side-left">
            <span className="buyin__icon buyin__icon--charge" /> You will be
            charged:
          </div>
          <div className="buyin__value side-right">${amount}</div>
        </div>

        {/* ---------------------------------------------------------------------- */}

        <AmountControl amount={amount} setAmount={setAmount} />

        <button className="buyin__wide-button" type="button">
          Auto Buy-In and Auto Rebuy
        </button>

        <TablesControl tables={tables} setTables={setTables} />

        <div className="buyin__actions">
          <button
            className="buyin__gray-button buyin__action"
            type="button"
            onClick={() => alert("Canceled")}
          >
            Cancel
          </button>

          <button
            className="buyin__green-button buyin__action"
            type="button"
            onClick={handleOk}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyIn;
