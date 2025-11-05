import { useState } from 'react'
import { URL } from '../../../const/constantes'
import { Mensaje } from '../../../components/mensaje/Mensaje'

function FromSearchUrl({ captchaToken, resetCaptcha }) {
    const [codeValor, setCodeValor] = useState("");
    const [message, setMessage] = useState(null)
    const [data, setdata] = useState({
        arcortado: null,
        codigo: null,
        original: null
    })

    const saveCode = (e) => {
        setCodeValor(e.target.value.toUpperCase());
    };

    const searchSubmit = async (e) => {
        e.preventDefault();
        const datos = {
            codigo: codeValor,
            captcha: captchaToken ?? null
        }


        const response = await fetch(`${URL}/api/buscar-url`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        })
        const res = await response.json();
        if (!res.success) {
            setdata({
                arcortado: null,
                codigo: null,
                original: null
            })
        } 
        else{
            setdata(res.data)
        }
        setMessage(res.message)
        resetCaptcha()
    };

    return (
        <div className='tools'>
            <form className='tools_form' onSubmit={searchSubmit}>
                <label className='tool_label'>
                    Ingrese codigo:
                    <input
                        type="text"
                        value={codeValor}
                        placeholder="Ingrese el CODIGO"
                        onChange={saveCode}
                        maxLength={10}
                        required
                    />
                </label>
                <button className='boton' disabled={captchaToken ? false : true} >Buscar URL</button>
            </form>
            <div>
                <Mensaje enlace={data.arcortado} url={data.original} texto={message} />
            </div>
        </div>
    )
}


export default FromSearchUrl