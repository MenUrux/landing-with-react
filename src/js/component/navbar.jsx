import React from "react"; // 1) Importar react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 2) Crear el componente
//create your first component
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-white-50" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-white-50" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// 3) Exportar el componente
export default Navbar;
