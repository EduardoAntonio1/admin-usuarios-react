import classes from "./Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.mainContenedor}>{props.children}</div>
      <Footer className={classes.footer} />
    </div>
  );
}

export default Layout;
