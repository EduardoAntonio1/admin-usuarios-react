import classes from "./Spinner.module.css";
function Spinner() {
  return (
    <div className={classes.outerDiv}>
      <div className={classes.loader} />
    </div>
  );
}

export default Spinner;
