// Rendering the date of an expense.
function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="card text-bg-secondary mb-3" style="max-width: 18rem;">
      <div className="card-header">{month}</div>
      <div className="card-body">
        <h5 className="card-title">{day}</h5>
        <p className="card-text">{year}</p>
      </div>
    </div>
  );
}

export default ExpenseDate;
