import React from "react"; // 1) Importar react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 2) Crear el componente
//create your first component
const Jumbotron = () => {
    return (
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
                <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button class="btn btn-primary btn-lg" type="button">Call to action</button>
            </div>
        </div>
    );
};

// 3) Exportar el componente
export default Jumbotron;
