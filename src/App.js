import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Tabla from "./components/registros/Tabla";
import Form from "./components/pages/Form";
import Spinner from "./components/ui/Spinner";
import Layout from "./components/ui/Layout";

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [dataArray, setDataArray] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect(() => {
    if (consultar) {
      const consultarApi = () => {
        fetch("https://evening-scrubland-79852.herokuapp.com/usuarios")
          .then((response) => response.json())
          .then((data) => {
            setDataArray(data);
            setIsloading(false);
            guardarConsultar(false);
          })
          .catch((e) => console.log(e));
      };
      consultarApi();
    }
  }, [consultar]);

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                if (isLoading) {
                  return <Spinner />;
                }
                return (
                  <>
                    <h2 style={{ marginTop: "0", marginBottom: "2.5rem" }}>
                      {" "}
                      Registros{" "}
                    </h2>
                    <Tabla
                      dataArray={dataArray}
                      guardarConsultar={guardarConsultar}
                    />
                  </>
                );
              }}
            />
            <Route
              path="/editar/:id"
              exact
              render={(props) => {
                const usuario = dataArray.filter(
                  (usuario) => usuario._id === props.match.params.id
                );
                return (
                  <>
                    <h2
                      style={{
                        marginTop: "0",
                        marginBottom: "2.5rem",
                      }}
                    >
                      {" "}
                      Editar Usuario{" "}
                    </h2>
                    <Form
                      guardarConsultar={guardarConsultar}
                      usuario={usuario[0]}
                      modoEditar={true}
                    />
                  </>
                );
              }}
            />
            <Route
              path="/crear"
              exact
              component={() => (
                <>
                  <h2 style={{ marginTop: "0", marginBottom: "2.5rem" }}>
                    {" "}
                    Crear Usuario{" "}
                  </h2>
                  <Form
                    guardarConsultar={guardarConsultar}
                    modoEditar={false}
                  />
                </>
              )}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
