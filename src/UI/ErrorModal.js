import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Card.module.css";
const ErrorModal = (props) => {


  if (!props.show) {
    return null;
  }

  return (
      <div className={classes.backdrop} onClick={props.onClick}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.footer}>
            <Button onClick={props.onClick}>Ok</Button>
          </footer>
        </Card>
      </div>
  );
};

export default ErrorModal;
