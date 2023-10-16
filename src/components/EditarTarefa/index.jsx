import React, { useState } from 'react';
import axios from 'axios';
import { ContentEdit } from './styles';


const EditarTarefa = () => {
  const [formData, setFormData] = useState({
    projeto_id: 0,
    titulo: '',
    descricao: '',
    data_conclusao: '',
    concluida: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tarefaId = formData.projeto_id; 
    try {
      await axios.put(`http://localhost:4000/tarefa/${tarefaId}`, formData);
      console.log('Tarefa editada com sucesso!');
      alert('Tarefa editada com sucesso!')
    } catch (error) {
      console.error('Erro ao editar a tarefa:', error);
    }
  };

  return (

    <ContentEdit>
    <div>
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Projeto ID:
          <input
            type="number"
            name="projeto_id"
            value={formData.projeto_id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Data de Conclusão:
          <input
            type="date"
            name="data_conclusao"
            value={formData.data_conclusao}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Concluída:
          <input
            type="checkbox"
            name="concluida"
            checked={formData.concluida}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
    </ContentEdit>
  );
};

export default EditarTarefa;
