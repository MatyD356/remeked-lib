import React from 'react';
import SignupForm from '../Form/Form';
import './Aside.scss';

function Aside(props) {
  return (
    <aside className="Aside">
      <h1 className="Aside-title">MyBooks</h1>
      <SignupForm />
    </aside>
  );
};

export default Aside;