import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard/">Início</Link></li>
        <li><Link to="/dashboard/sobre">Sobre</Link></li>
        <li><Link to="/dashboard/contato">Contato</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
