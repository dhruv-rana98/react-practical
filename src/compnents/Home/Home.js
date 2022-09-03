import React, { useState } from "react";
import Header from "../Navigation/Header";
import Form from "../Forms/Form";
import List from "../List/List";
function Home() {
  const [itemList, setItemList] = useState([]);
  const onDeleteHandler = (id) => {
    const items = itemList.filter((i) => i.id !== id);
    setItemList(items);
  };
  const addItemHandler = (inputvalue) => {
    setItemList((prevItemList) => {
      return [
        ...prevItemList,
        { id: Math.random().toString(), item: inputvalue },
      ];
    });
  };
  return (
    <>
      <Header title="ToDoList" />
      <div className="container">
        <Form onAddItem={addItemHandler} />
        <List items={itemList} deleteHandler={onDeleteHandler} />
      </div>
    </>
  );
}

export default Home;
