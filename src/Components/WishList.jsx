import React from "react";
import styles from "./wishlist.module.css";


const WishList = () => {
  let [query, setquery] = React.useState("");
  let [task, settask] = React.useState([]);
  function addItem() {
    let payload = {
      checkbox: <input type="checkbox" />,
      todo: query,
      status: true,
    };
    let newItem = [...task, payload];
    settask(newItem);
  }
  function handlechange(e) {
    const { value } = e.target;
    setquery(value);
  }

  console.log(task);
  if(task.length>3){
    return <h2>You cannot add more than 3 items to wishlist</h2>
  }
  return (
    <>
      <h1>Wishlist</h1>
      <input className={styles.input}
        type="text"
        placeholder="Add Your Wishlist Here"
        value={query}
        onChange={handlechange}
      />
      <button className={styles.button} onClick={addItem}>ADD</button>
      {task.map(({ todo }) => (
        <h4 key={todo}>{todo}</h4>
      ))}
    </>
  );
};

export { WishList };
