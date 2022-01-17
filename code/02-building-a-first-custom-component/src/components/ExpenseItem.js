import './ExpenseItem.css';

function ExpenseItem(props) {

  let month = props.date.toLocaleString('en-US',{month : 'long'});
  let day = props.date.toLocaleString('en-us',{day : '2-digit'});
  let year = props.date.getFullYear();

  return ( 
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div>{props.date.toDateString()}</div>
      <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;