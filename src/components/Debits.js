/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Debits = (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    });
  }

  // Handle form submission
  const handleAddDebit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    props.addDebit({
      id: Date.now(), // Unique ID based on current timestamp
      amount: parseFloat(amount),
      description,
      date: new Date().toISOString().slice(0, 10), // Get current date in yyyy-mm-dd format
    });
    setAmount(''); // Clear amount input field
    setDescription(''); // Clear description input field
  };

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>

    <ul>{debitsView()}</ul>

    <form onSubmit={handleAddDebit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Debit</button>
    </form>

    <br />
    <Link to="/">Return to Home</Link>
    </div>
    
  );
}

export default Debits;