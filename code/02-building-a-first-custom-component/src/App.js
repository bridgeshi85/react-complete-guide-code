import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { title : 'Car Insurance' , amount : 295.32, date: new Date(2022,1,17) , id : 'e1'}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title= {expenses[0].title} 
        amount = {expenses[0].amount}
        date = {expenses[0].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
