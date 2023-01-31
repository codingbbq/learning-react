import Card from "../UI/Card";
import ExpenseItem from "../Expense/ExpenseItem";

function Expenses(props) {
  return (
    <Card>
      <ExpenseItem item={props.item} />
    </Card>
  );
}

export default Expenses;
