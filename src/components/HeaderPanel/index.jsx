import React from 'react';
import LogoPng from '../../assets/img/logogestilt.png';


import 
{ 
  ContainerHeaderPanel, 
  ContentIcons 
} 
from './styles';
import { FaSearch, FaUser, FaRegBell } from 'react-icons/fa';

const HeaderPanel = () => {
 

  return (
    <ContainerHeaderPanel>
      <div className='logo-header-panel'>
       <a href="/"> <img src={LogoPng} alt='logo header' /></a>
      </div>

      <ContentIcons>
      
        <div className='search-panel'>
          <FaSearch />
        </div>

        <div className='icons-panel'>
          <FaUser />
          <FaRegBell />
        </div>
      </ContentIcons>
    </ContainerHeaderPanel>
  );
};

export default HeaderPanel;
