import React from 'react';
import girasol from './style/image/girasol.png';

class RegistroEntidad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarAviso: false,
      camposIncompletos: false
    };
  }

  handleRegistrarEntidad = () => {
    const { nit, razon_social, telefonoen, correoEn } = this.state;

    // Verificar si alguno de los campos está vacío
    if (!nit || !razon_social || !telefonoen || !correoEn) {
      this.setState({ camposIncompletos: true });
    } else {
      // Lógica para registrar la entidad aquí
      // Puedes realizar tus operaciones para registrar la entidad

      // Después de registrar, mostramos el aviso y ocultamos el aviso de campos incompletos
      this.setState({ mostrarAviso: true, camposIncompletos: false });

      // También puedes redireccionar o realizar cualquier otra acción necesaria
    }
  }

  render() {
    const { setRoute } = this.props;
    const { mostrarAviso, camposIncompletos } = this.state;
    
    return (
      <section className="section">
        <div className="wrap">
          <div className="tittleImg">
            <img src={girasol} alt="Girasol" />
            <h1 className="section-h1">Sunflower Payroll</h1>
          </div>
          <form>
            <label htmlFor="nit">Nit Entidad</label>
            <input type="text" name="nit" id="nit" className="form-control" onChange={e => this.setState({ nit: e.target.value })} />
            
            <label htmlFor="razon_social">Razon social</label>
            <input type="text" name="razon_social" id="razon_social" className="form-control" onChange={e => this.setState({ razon_social: e.target.value })} />
            
            <label htmlFor="telefonoen">Telefono Entidad</label>
            <input type="text" name="telefonoen" id="telefonoen" className="form-control" onChange={e => this.setState({ telefonoen: e.target.value })} />
            
            <label htmlFor="correoEn">Correo Entidad</label>
            <input type="email" name="correoEn" id="correoEn" className="form-control" onChange={e => this.setState({ correoEn: e.target.value })} />
            {camposIncompletos && <div className="aviso">Por favor complete todos los campos</div>}
            
            <div className="buttons">
              
              <input type="button" name="boton" value="Registrar Entidad" className="btn" onClick={this.handleRegistrarEntidad} />
              
              <button className="btn" onClick={() => setRoute('home')}>Regresar al Menú</button>
            
            </div>
          </form>
          {mostrarAviso && (
            <div className="aviso">
              Entidad registrada con éxito.
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default RegistroEntidad;
