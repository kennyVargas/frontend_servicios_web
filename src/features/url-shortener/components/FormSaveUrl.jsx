import { useState, useEffect } from 'react'
import { URL } from '../../../const/constantes'
import { Mensaje } from '../../../components/mensaje/Mensaje'

function FormSaveUrl({ captchaToken, isActiveToggle, resetCaptcha }) {
    const [urlValor, setUrlValor] = useState("");
    const [codeValor, setCodeValor] = useState("");
    const [message, setMessage] = useState("")
    const [codeIsValid, setCodeIsValid] = useState(!isActiveToggle)
    const [errores, setErrores] = useState({});

    const [data, setdata] = useState({
        arcortado: null,
        codigo: null,
        original: null,
        success: false
    })

    useEffect(() => {
        if (!isActiveToggle) {
            setErrores({})
            setCodeValor("")
            setCodeIsValid(!isActiveToggle)
        }
        else {
            setCodeIsValid(false)
        }

    }, [isActiveToggle])


    const validarCampo = (valor) => {
        const errores = {};
        if (!valor.trim()) {
            errores.campo = 'El campo es obligatorio';
        } else if (valor.trim().length < 3) {
            errores.campo = 'El campo debe tener al menos 3 caracteres';
        } else if (valor.trim().length > 50) {
            errores.campo = 'El campo no puede tener más de 50 caracteres';
        }
        return errores;
    };

    const saveUrl = (e) => {
        setUrlValor(e.target.value);
    };
    const saveCode = (e) => {
        const valor = e.target.value.toUpperCase();
        setCodeValor(valor);
        const nuevosErrores = validarCampo(valor);
        setErrores((prev) => ({ ...prev, campo: nuevosErrores.campo }));
    };

    const verficarCodigoInput = async (codigo) => {
        const datos = { codigo }
        const response = await fetch(`${URL}/api/verificar-codigo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        })
        const res = await response.json();

        setCodeIsValid(res.data)
        if (res.success) {
            setErrores((prev) => ({ ...prev, campo: res.message }));
        }
    }

    const handleBlur = async () => {
        if (codeValor.trim()) {
            verficarCodigoInput(codeValor.trim())
        }
    };

    const saveSubmit = async (e) => {
        e.preventDefault();
        const datos = {
            original: urlValor,
            codigo: codeValor ?? null,
            captcha: captchaToken ?? null
        }
        const response = await fetch(`${URL}/api/acortar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        })

        const res = await response.json();
        if (!res.success) {
            setdata({
                arcortado: null,
                codigo: null,
                original: null,
                success: false
            })
        }
        else {
            setdata({ ...res.data, success: res.success })
        }
        setMessage(res.message)
        resetCaptcha()

    };

    return (
        <div className='tools'>
            <form className='tools_form' onSubmit={saveSubmit}>
                <label className='tool_label'>
                    URL:
                    <input
                        type="url"
                        value={urlValor}
                        placeholder="https://example.com"
                        onChange={saveUrl}
                        required
                    />
                </label>
                {isActiveToggle && (<label className='tool_label'>
                    Codigo:
                    <input
                        type="text"
                        value={codeValor}
                        placeholder="Ingrese el CODIGO"
                        onChange={saveCode}
                        onBlur={handleBlur}
                        maxLength={10}
                        aria-describedby={errores.campo ? 'error-campo' : undefined}
                        required
                    />
                </label>)}
                {errores.campo && (
                    <p id="error-campo" style={{ color: 'red', fontSize: '0.875rem' }}>
                        {errores.campo}
                    </p>
                )}

                <button className='boton' disabled={captchaToken && codeIsValid ? false : true} >Arcortar URL</button>
            </form>
            <div>
                <Mensaje enlace={data.arcortado} url={data.original} color={data.success ? 'green' : 'red'} texto={message} />
            </div>
        </div>
    )
}

export default FormSaveUrl