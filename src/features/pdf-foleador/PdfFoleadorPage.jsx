import React, { useState, useRef } from 'react';
import { URL } from "../../const/constantes"
import { useCaptchaSiteKey } from '../../components/Captcha/useCaptchaSiteKey';
import { ReCaptchaWrapper } from '../../components/Captcha/ReCaptchaWrapper';
export const PdfFoleadorPage = () => {
  const [config, setConfig] = useState({
    paginas: 1,
    posicion: 'abajo-derecha',
    tamano: 12,
    formato: 'carta',
    orden: 'ascendente',
    captcha: null
  });

  const [pdfUrl, setPdfUrl] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const siteKey = useCaptchaSiteKey()
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const generarPDF = async () => {
    setCargando(true);
    setPdfUrl(null);
    config.captcha = captchaToken
    try {
      const response = await fetch(`${URL}/api/generar-pdf`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      })

      if (!response.ok) throw new Error('Error al generar PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
      setCaptchaToken(null)
      if (captchaRef.current) {
        captchaRef.current.reset();
      }
    } catch (err) {
      alert('No se pudo generar el PDF');
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <div className='container_service'>
        <div className='container_btn_retorno'>
          <a href="/" className='btn_retorno'><i className='bx bx-left-top-arrow-circle'></i></a>
          <h1 className="text-3xl font-bold text-center mb-10 text-[#4361ee]">Generar PDF Foliados</h1>
        </div>
        <div className='tools'>
          <div className='tools_form'>
            <label className='tool_label'>
              Nro. de páginas:
              <input
                type="number"
                name="paginas"
                value={config.paginas}
                onChange={handleChange}
                min={1}
                style={{ marginLeft: 10 }}
                required
              />
            </label>
            <label className='tool_label'>
              Orden de enumeracion:
              <select className='opciones' name="orden" value={config.orden} onChange={handleChange}>
                <option value="ascendente">Ascendente</option>
                <option value="descendente">Descendente</option>
              </select>
            </label>
            <label className='tool_label'>
              Posición del número de página:
              <select className='opciones' name="posicion" value={config.posicion} onChange={handleChange}>
                <option value="abajo-centro">Abajo Centro</option>
                <option value="abajo-izquierda">Abajo Izquierda</option>
                <option value="abajo-derecha">Abajo Derecha</option>
                <option value="arriba-centro">Arriba Centro</option>
                <option value="arriba-izquierda">Arriba Izquierda</option>
                <option value="arriba-derecha">Arriba Derecha</option>
              </select>
            </label>

            <label className='tool_label'>
              Tamaño de fuente:
              <input
                type="number"
                name="tamano"
                value={config.tamano}
                onChange={handleChange}
                min={8}
                style={{ marginLeft: 10 }}
                required
              />
            </label>

            <label className='tool_label'>
              Formato de hoja:
              <select className='opciones' name="formato" value={config.formato} onChange={handleChange}>
                <option value="carta">Carta</option>
                <option value="oficio">Oficio</option>
              </select>
            </label>

            <ReCaptchaWrapper siteKey={siteKey} onChange={onCaptchaChange} ref={captchaRef} />

            <button className='boton' onClick={generarPDF} disabled={captchaToken ? false : true}>
              {cargando ? 'Generando...' : 'Generar PDF'}
            </button>
            {pdfUrl && (
              <div className='tools'>
                <a className='boton' href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  Ver PDF
                </a>
                <a className='boton' href={pdfUrl} download="documento.pdf">
                  Descargar PDF
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

