import { useGlobalContext } from "../context/global-state";
import { useMultiState } from "../hooks";

const AddTransaction = () => {
  const [{ text, amount }, setState] = useMultiState({
    text: "",
    amount: 0,
  });

  const { addTransaction } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setState({
      text: "",
      amount: 0,
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ [name]: value });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={onChange}
            className="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            name="amount"
            onChange={onChange}
            className="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn" disabled={!text}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
