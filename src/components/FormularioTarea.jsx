import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const { tarea, setTarea } = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array listaTareas
    setListaTareas([...listaTareas, tarea]);
    //limpiar el value del imput
    setTarea("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary">Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas propslistaTareas={listaTareas}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
