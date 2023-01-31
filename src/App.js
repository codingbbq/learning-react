// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 90.12,
      date: new Date(2022, 7, 14)
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: 290.12,
      date: new Date(2022, 8, 14)
    }
  ];

  return (
    <div className="container">
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
