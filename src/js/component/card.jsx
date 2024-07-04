import React from "react"; // 1) Importar react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// 2) Crear el componente
//create your first component
const Card = () => {
    return (
        <div className="d-flex gap-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://loremflickr.com/400/400" className="card-img-top" alt="Rigo Baby" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>
    );
};

// 3) Exportar el componente
export default Card;
