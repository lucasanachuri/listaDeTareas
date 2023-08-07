import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {propslistaTareas.map((tarea, index) => (
        <ItemTarea
          key={index}
          nombreTarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
