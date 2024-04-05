import React, { Component } from 'react';
import girasol from './style/image/girasol.png';



class ListarEntidad extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
      }
    render() {
        const { setRoute } = this.props;
        return (
            <>
            <section className="section">
                <div>
                    <div className="tittleImg">
                        <img src={girasol} alt="" width="100px"/>
                        <h1 className="section-h1">Sunflower Payroll <br/> Empresas</h1>
                    </div>
                    <table className="table">
                        <caption>LISTADO DE EMPLEADOS</caption>
                        <thead>
                            <tr>
                                <th>NIT</th>
                                <th>TELEFONO ENTIDAD</th>
                                <th>RAZON SOCIAL</th>
                                <th>CORREO</th>
                                <th colspan="2">ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456789</td>
                                <td>555-123-4567</td>
                                <td>Empresa Ejemplo 1</td>
                                <td>info@empresa1.com</td>
                                <td><a href='#'>Eliminar</a></td>
                                <td><a href='#'>Modificar</a></td>
                            </tr>
                            <tr>
                                <td>987654321</td>
                                <td>555-987-6543</td>
                                <td>Empresa Ejemplo 2</td>
                                <td>contacto@empresa2.com</td>
                                <td><a href='#'>Eliminar</a></td>
                                <td><a href='#'>Modificar</a></td>
                            </tr>
                            <tr>
                                <td>246813579</td>
                                <td>555-246-8135</td>
                                <td>Empresa Ejemplo 3</td>
                                <td>support@empresa3.com</td>
                                <td><a href='#'>Eliminar</a></td>
                                <td><a href='#'>Modificar</a></td>
                            </tr>
                            <tr>
                                <td>135792468</td>
                                <td>555-135-7924</td>
                                <td>Empresa Ejemplo 4</td>
                                <td>ventas@empresa4.com</td>
                                <td><a href='#'>Eliminar</a></td>
                                <td><a href='#'>Modificar</a></td>
                            </tr>
                            <tr>
                                <td>369258147</td>
                                <td>555-369-2581</td>
                                <td>Empresa Ejemplo 5</td>
                                <td>info@empresa5.com</td>
                                <td><a href='#'>Eliminar</a></td>
                                <td><a href='#'>Modificar</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttons">
                        <input type="button" name="botonRegresar" value="Regresar al Menú" className="btn" onClick={() => setRoute('home')}/>
                    </div>
                </div>
            </section>
            </>
         );
    }
}
 
export default ListarEntidad;
