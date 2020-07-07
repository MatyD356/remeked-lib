import React from 'react';
import Form from '../Form/Form';
import './Aside.css';

function Aside(props) {
  return (
    <aside className="Aside">
      <h1 className="Aside-title">MyBooks</h1>
      <Form />
    </aside>
  );
};

export default Aside;