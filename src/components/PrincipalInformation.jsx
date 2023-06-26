export const PrincipalInformation = () => {
  return (
    <div className="container mb-4">
      <div className="card bg-light">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h2 className="card-title text-center text-dark">
                SOBRE NOSOTROS
              </h2>
              <p className="card-text text-justify text-dark">
                Somos una sucursal del restaurante Nicaraguense ubicado en
                Managua. Trabajamos con la calidad y el sabor que nos
                caracteriza.
              </p>
              <p className="card-text text-justify text-dark">
                La lealtad con que nos ha premiado nuestra clientela, nos anima
                a ofrecer día a día lo mejor de nuestros esfuerzos en la
                búsqueda de la satisfacción de nuestros clientes, que constituye
                nuestro principal capital. Nos hemos atrevido a colocarnos en
                Santiago de Chile, para que conozcan un poco de nuestra
                gastronomia tan aclamada en paises del mundo.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/informacion-restaurante.png"
                alt="restaurante"
                className="img-fluid smaller-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
