import React from 'react';
import girasol from './style/image/girasol.png';

class Menu extends React.Component {
  render() {
    const { setRoute } = this.props;

    return (
      <div className="section">
        <div className="tittleImg">
          <img src={girasol} alt="" />
          <h1 className="section-h1">Sunflower Payroll <br /> Empresas</h1>
        </div>
        <div className="buttons">
          <form>
            <button className="btn" onClick={() => setRoute('RegistroEntidad')}>Registro de Entidad</button>
          </form>
          <form>
            <button className="btn" onClick={() => setRoute('ListarEntidad')}>Listar empresa</button>
          </form>
          <form>
            <button className="btn" onClick={() => setRoute('home')}>Inicio</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Menu;
