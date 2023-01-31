// Rendering the date of an expense.
function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <>
      <p>
        {month} {day}
      </p>
      <p>{year}</p>
    </>
  );
}

export default ExpenseDate;
