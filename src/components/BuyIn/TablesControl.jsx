function TablesControl({ tables, setTables }) {
  const handleTablesChange = (value) => {
    const number = Number(value);

    if (Number.isNaN(number) || number < 1) {
      setTables(1);
      return;
    }

    setTables(Math.floor(number));
  };

  return (
    <div className="buyin__tables">
      <button
        className="buyin__gray-button"
        type="button"
        disabled={tables === 1}
        onClick={() => setTables((prev) => Math.max(1, prev - 1))}
      >
        −
      </button>
      <label className="buyin__field buyin__field--tables">
        <span>Number of tables</span>
        <input
          type="number"
          min="1"
          value={tables}
          onChange={(e) => handleTablesChange(e.target.value)}
        />
      </label>

      <button
        className="buyin__gray-button buyin__gray-button--plus"
        type="button"
        onClick={() => setTables((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}

export default TablesControl;
