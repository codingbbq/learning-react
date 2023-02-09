import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.item.title);
  // Adding Event Listeners.
  const clickHandler = () => {
    setTitle("New Title");
  };
  return (
    <div>
      <ExpenseDate date={props.item.date} />
      <p>{title}</p>
      <p>{props.item.amount}</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default ExpenseItem;
