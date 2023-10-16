import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import axios from "axios";
import { format } from "date-fns";
import { ContainerTarefas } from "./styles";

const Tarefas = () => {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [concluida, setConcluida] = useState(false);
  const [projetoId, setProjetoId] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [tarefaid, setTarefaId] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tarefa");
      setTarefas(response.data.tarefas);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const createTask = async () => {
    try {
      const dataFormatada = format(selectedDate, "yyyy-MM-dd"); 
      const tarefaResponse = await axios.post("http://localhost:4000/tarefa", {
        projeto_id: projetoId,
        titulo: titulo,
        descricao: descricao,
        data_conclusao: dataFormatada, 
        concluida: concluida,
      });

      console.log("Tarefa criada:", tarefaResponse.data);

      fetchData();

      // alert('Tarefa salva com sucesso!');
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar a tarefa:", error);
    }
  };

  const clearTask = () => {
    setTitulo("");
    setDescricao("");
    setSelectedDate(new Date());
    setConcluida(false);
    setTarefaId(0);
  };

  const handleSave = async () => {
    try {
      await createTask();

      clearTask();

      fetchData();

      alert("Tarefa salva com sucesso!");
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar a tarefa:", error);
      alert("Erro ao salvar ao salvar a tarefa. Por favor, tente novamente.");
    }
  };

  const handleDelete = async (tarefaId) => {
    try {
      await axios.delete(`http://localhost:4000/tarefa/${tarefaId}`);
      alert("Tarefa excluída com sucesso!");
      fetchData(); 
    } catch (error) {
      console.error("Erro ao deletar a tarefa:", error);
    }
  };

  return (
    <ContainerTarefas>
      <div className="btn-create-project">
        <button onClick={handleOpenModal}>Criar Tarefa</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <label>Projeto ID:</label>
              <input
                placeholder="Projeto ID"
                type="text"
                value={projetoId}
                onChange={(e) => setProjetoId(e.target.value)}
              />
              <label>Título:</label>
              <input
                placeholder="Título"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <label>Descrição:</label>
              <textarea
                placeholder="Descrição"
                name="Descrição"
                id="desc"
                cols="20"
                rows="5"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
              <label>Data de Conclusão:</label>
              <Datetime
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                inputProps={{ placeholder: "Selecione uma Data" }}
              />
              <label>Concluída:</label>
              <input
                type="checkbox"
                checked={concluida}
                onChange={() => setConcluida(!concluida)}
              />
              <button className="btn-task" onClick={handleSave}>
                Salvar Tarefa
              </button>
              <button className="btn-close" onClick={handleCloseModal}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
       
        <ul style={{ marginLeft: "600px" }}>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefa.titulo} - {tarefa.descricao} -{" "}
              {format(new Date(tarefa.data_conclusao), "dd/MM/yyyy")} -{" "}
              {tarefa.concluida ? "Concluída" : "Não Concluída"}
              <a
             
                href="editar"
                className="btn-save"
                onClick={() => handleEdit(tarefa.id)}
              >
                Editar
              </a>
              <button
                className="btn-del"
                onClick={() => handleDelete(tarefa.id)}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </ContainerTarefas>
  );
};

export default Tarefas;
