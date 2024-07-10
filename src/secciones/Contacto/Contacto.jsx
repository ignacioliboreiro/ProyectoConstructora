import "./Contacto.css"

const Contacto = () => {
    return (
        <div>
            <div className="titulo4">
            <h1 id="5">Detalles de contacto</h1>
            </div>
            <div className="seccion-4">
                <div>
                <form target="_blank" action="https://formsubmit.co/ignaliboreiroo@gmail.com" method="POST">
                    <div className="telefono">
                    <img src="/llamada-telefonica.png" alt="telefono" className="imgTelefono" />
                    +54 291 5085410
                    </div>
                    <div className="inputs">
                    <p>Nombre:</p>
                    <input type="text" name="name" className="input" />
                    <p>Email:</p>
                    <input name="email" id="email" type="text" className="input"  />
                    <p>Mensaje:</p>
                    <textarea required="" cols="35" rows="10" id="textarea" name="message"/>
                    <button type="submit">Enviar</button>
                    </div>
                </form>
                </div>
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12440.378812613288!2d-62.27806092375316!3d-38.784463271481044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbd544f539f17%3A0x3494dd11db3c5884!2sIngeniero%20White%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1720464134227!5m2!1ses!2sar" width="600" height="450"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contacto