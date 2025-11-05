import { useState, useRef } from 'react'
import { useCaptchaSiteKey } from '../../components/Captcha/useCaptchaSiteKey';
import { ReCaptchaWrapper } from '../../components/Captcha/ReCaptchaWrapper';
import { Qrcanvas } from "./components/Qrcanvas"
import { URL } from "../../const/constantes"
export const QrGeneratorPage = () => {

    const [urlValor, setUrlValor] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);
    const [success, setSuccess] = useState(false)
    const siteKey = useCaptchaSiteKey()
    const [base64Image, setBase64Image] = useState("")

    const captchaRef = useRef(null);

    const submitDataQR = async ({ url, captcha }) => {
        const response = await fetch(`${URL}/api/qr`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, captcha })
        })
        const res = await response.json();
        setSuccess(res.success ?? false)
        setBase64Image(res.data ?? "")
        setUrlValor("")
        setCaptchaToken(null)
        if (captchaRef.current) {
            captchaRef.current.reset();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const datos = {
            url: urlValor,
            captcha: captchaToken
        }

        await submitDataQR(datos)
    };
    const saveUrl = (e) => {
        setUrlValor(e.target.value);
    };

    const onCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    return (
        <div >
            <div className='container_service'>
                <div className='container_btn_retorno'>
                    <a href="/" className='btn_retorno'><i className='bx bx-left-top-arrow-circle'></i></a>
                    <h1 className="text-3xl font-bold text-center mb-10 text-[#4361ee]">Generador de QR</h1>
                </div>
                <div className='tools'>
                    <form className='tools_form' onSubmit={handleSubmit}>
                        <label className='tool_label'> URL:
                            <input
                                type="text"
                                value={urlValor}
                                placeholder="https://example.com"
                                onChange={saveUrl}
                                required
                            />
                        </label>
                        <ReCaptchaWrapper siteKey={siteKey} onChange={onCaptchaChange} ref={captchaRef} />
                        <button className='boton' disabled={captchaToken ? false : true}>Generar QR</button>
                    </form>
                    <div className='tools_form'>
                        {success ? <Qrcanvas base64Image={base64Image} /> :
                            <div className='canvas_qr'></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
