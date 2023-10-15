import React from 'react';
import Header_Login from '../../components/HeaderPanel';
import Projetos from '../../components/Projetos';


import { ContainerPanel } from './styles';

const Panel = () => {
 
  return (
    <ContainerPanel>
      <Header_Login />
      <Projetos />
    

     
    </ContainerPanel>
  );
};

export default Panel;
