// ConfirmationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from './Datatable';

function ConfirmationPage() {
  const navigate = useNavigate(); // useNavigate hook from react-router-dom

  const goback = () => {
    navigate('/'); // Corrected the typo and used navigate function
  };

  return (
    <div className="confirmation">
      <h1>Your entries have been made!</h1>
      <DataTable />
      <button onClick={goback}>Go back</button>
    </div>
  );
}

export default ConfirmationPage;
