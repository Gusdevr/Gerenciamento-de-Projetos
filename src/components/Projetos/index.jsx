import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import axios from "axios";
import { format } from "date-fns";
import { ContainerProjetos } from "./styles";
// import Tarefas from "../Tarefas";

const Projetos = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTarefas, setShowTarefas] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [done, setDone] = useState(false);
  const [projetos, setProjetos] = useState([]);
  const [projetoid, setProjetoId] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/projeto");
      setProjetos(response.data.list);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
    setShowTarefas(true);
  };

  const handleCloseModal = () => {
    clearProject();
    setShowModal(false);
    setShowTarefas(false);
  };

  const createProject = async () => {
    const dataFormatada = format(selectedDate, "yyyy-MM-dd");
    const projetoResponse = await axios.post("http://localhost:4000/projeto", {
      nome: nome,
      descricao: descricao,
      data_inicio: dataFormatada,
      done: done,
    });
    return projetoResponse;
  };

  const updateProject = async () => {
    const dataFormatada = format(selectedDate, "yyyy-MM-dd");
    const projetoResponse = await axios.put(
      `http://localhost:4000/projeto/${projetoid}`,
      {
        nome: nome,
        descricao: descricao,
        data_inicio: dataFormatada,
        done: done,
      }
    );
    return projetoResponse;
  };

  const clearProject = () => {
    setNome("");
    setDescricao("");
    setSelectedDate(new Date());
    setDone(false);
    setProjetoId(0);
  };

  const handleSave = async () => {
    try {
      if (projetoid > 0) {
        await updateProject();
      } else {
        await createProject();
      }

      clearProject();

      fetchData();

      alert("Projeto salvo com sucesso!");
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar o projeto:", error);
      alert("Erro ao salvar o projeto. Por favor, tente novamente.");
    }
  };

  const handleEdit = async (projeto_id) => {
    console.log(projeto_id);
    try {
      const response = await axios.get(
        `http://localhost:4000/projeto/${projeto_id}`
      );

      setNome(response.data.item.nome);
      setDescricao(response.data.item.descricao);
      setSelectedDate(new Date(response.data.item.data_inicio));
      setDone(response.data.item.done);
      setProjetoId(response.data.item.id);
      handleOpenModal();
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  const handleDelete = async (projeto_id) => {
    console.log(projeto_id);
    try {
      const response = await axios.delete(
        `http://localhost:4000/projeto/${projeto_id}`
      );

      alert("Projeto excluido com sucesso!");
      fetchData();
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao deletar projetos:", error);
    }
  };

  return (
    <ContainerProjetos>
      <div className="btn-create-project">
        <button onClick={handleOpenModal}>Criar Projeto</button>
        <a href="/painelprojetos">Meus Projetos</a>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <label>Nome:</label>
              <input
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
              <label>Data de Inicio:</label>
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
                checked={done}
                onChange={() => setDone(!done)}
              />
              <button className="btn-save" onClick={handleSave}>
                Salvar Projeto
              </button>
              <button className="btn-close" onClick={handleCloseModal}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* <div className="title-project">
        <div>
          <h2>Projetos</h2>
        </div>
        <ul>
          {projetos.map((projeto) => (
            <li key={projeto.id}>
              {projeto.nome} - {projeto.descricao} -{" "}
              {format(new Date(projeto.data_inicio), "dd/MM/yyyy")} -{" "}
              {projeto.done ? "Concluído" : "Não Concluído"}
              <button
                className="btn-edit"
                onClick={() => handleEdit(projeto.id)}
              >
                Editar
              </button>
              <button onClick={() => handleDelete(projeto.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
      {showTarefas && <Tarefas />} */}
    </ContainerProjetos>
  );
};

export default Projetos;
