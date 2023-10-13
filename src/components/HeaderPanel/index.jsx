import React, { useState } from 'react';
import LogoPng from '../../assets/img/logogestilt.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import { ContainerHeaderPanel, ContentIcons } from './styles';
import { FaSearch, FaUser, FaRegBell } from 'react-icons/fa';

const HeaderPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:4000/projeto', {
        nome: titulo,
        descricao: descricao,
        data: selectedDate,
        done: false,
      });
      alert('Projeto salvo com sucesso!');
      handleCloseModal();
    } catch (error) {
      console.error('Erro ao salvar o projeto:', error);
      alert('Erro ao salvar o projeto. Por favor, tente novamente.');
    }
  };

  return (
    <ContainerHeaderPanel>
      <div className='logo-header-panel'>
       <a href="/"> <img src={LogoPng} alt='logo header' /></a>
      </div>

      <ContentIcons>
        <div className='btn-create-project'>
          <button onClick={handleOpenModal}>Criar Projeto</button>
          {showModal && (
            <div className='modal'>
              <div className='modal-content'>
                <input placeholder='Título' type='text' />
                <textarea
                  placeholder='Descrição'
                  name='Descrição'
                  id='desc'
                  cols='20'
                  rows='5'
                ></textarea>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText='Selecione uma Data'
                />
                <button onClick={handleSave}>Salvar</button>
                <button onClick={handleCloseModal}>Fechar</button>
              </div>
            </div>
          )}
        </div>

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
