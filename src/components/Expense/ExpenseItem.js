import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // Adding Event Listeners.
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <ExpenseDate date={props.item[0].date} />
      <p>{props.item[0].title}</p>
      <p>{props.item[0].amount}</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default ExpenseItem;
