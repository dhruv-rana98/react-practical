import ListItem from "./ListItem";

const List = (props) => {
  const onDeleteHandler = (id) => {
    // const items = props.items.filter((i) => i.id !== item.id);
    props.deleteHandler(id);
  };
  return (
    <ul className="list-group list-group-flush">
      {props.items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.item}
          className="list-group-item"
          delete={onDeleteHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default List;
