import React from "react";
import styles from "./vegetable.module.css";

const Vegetables = () => {
    
    //Tomatoes
  var [tomato, setTomato] = React.useState(10);
  function inTomato() {
    setTomato(tomato + 1);
  }
  function deTomato() {
    setTomato(tomato - 1);
  }

  //Potato
  var [potato, setPotato] = React.useState(8);
  function inPotato() {
    setPotato(potato + 1);
  }
  function dePotato() {
    setPotato(potato - 1);
  }

  //Carrot
  var [carrot, setCarrot] = React.useState(5);
  function inCarrot() {
    setCarrot(carrot + 1);
  }
  function deCarrot() {
    setCarrot(carrot - 1);
  }

  //Onion
  var [onion, setOnion] = React.useState(7);
  function inOnion() {
    setOnion(onion + 1);
  }
  function deOnion() {
    setOnion(onion - 1);
  }

  return (
    <>
      <h2>Tomatoes - {tomato} kgs</h2>
      <button className={styles.button} onClick={inTomato}>+</button>
      <button className={styles.button} onClick={deTomato}>-</button>
      <h2>Potatoes - {potato} kgs</h2>
      <button className={styles.button} onClick={inPotato}>+</button>
      <button className={styles.button} onClick={dePotato}>-</button>
      <h2>Carrots - {carrot} kgs</h2>
      <button className={styles.button} onClick={inCarrot}>+</button>
      <button className={styles.button} onClick={deCarrot}>-</button>
      <h2>Onions - {onion} kgs</h2>
      <button className={styles.button} onClick={inOnion}>+</button>
      <button className={styles.button} onClick={deOnion}>-</button>
    </>
  );
};

export { Vegetables };
