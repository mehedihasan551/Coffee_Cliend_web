import React from 'react';

import Foote from './Componends/Footer/Foote';
import Header from './Componends/Header/Header';
import MainHeader from './Layout/HeaderSection/MainHeader';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
    <Outlet></Outlet>
      <Foote></Foote>
    </div>
  );
};

export default App;