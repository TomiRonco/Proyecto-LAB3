import { useContext, useState } from "react";
import { AuthenticationContext } from "../../services/authenticationContext/authentication.context";
import { useNavigate } from "react-router";

import "./DashBoard.css";
import UserList from "../userList/UserList";
import AllTasks from "../allTasks/AllTasks";
import NewTask from "../newTask/NewTask";

const DashBoard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const { handleLogout } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleRender = (component) => {
    setSelectedComponent(component);
  };

  const handleLogoutInDashboard = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <div className="vh-100 d-flex flex-column custom-background">
      <nav className="navbar d-flex justify-content-end custom-nav">
        <button
          className="btn btn-violet me-5"
          onClick={handleLogoutInDashboard}
        >
          Cerrar sesión
        </button>
      </nav>
      <div className="flex-grow-1 row m-0">
        <div className="col-2 p-0 d-flex flex-column align-items-center gap-3 column1-custom">
          <button
            className="btn btn-violet mt-5 w-75"
            onClick={() => handleRender(<UserList />)}
          >
            Lista de usuarios
          </button>
          <button
            className="btn btn-violet mt-5 w-75"
            onClick={() => handleRender(<AllTasks />)}
          >
            Lista de tareas
          </button>
          <button
            className="btn btn-violet mt-5 w-75"
            onClick={() => handleRender(<NewTask />)}
          >
            Crear tarea
          </button>
        </div>
        <div className="col-10 p-0">
          <div className="d-flex justify-content-center align-items-center m-auto">
            {selectedComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
