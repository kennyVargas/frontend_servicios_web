import { useState, useRef } from 'react'
import { useCaptchaSiteKey } from '../../components/Captcha/useCaptchaSiteKey';
import { ReCaptchaWrapper } from '../../components/Captcha/ReCaptchaWrapper';
import FromSearchUrl from "./components/FromSearchUrl"
import FormSaveUrl from "./components/FormSaveUrl"
import { ToggleButton } from "../../components/form/ToggleButton"

export const UrlShortenerPage = () => {

  const [captchaToken, setCaptchaToken] = useState(null);
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  const siteKey = useCaptchaSiteKey()
  const captchaRef = useRef(null);

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  const toggleComponent = () => {
    setIsActiveToggle(prev => !prev);
  };

  const resetCaptcha = () => {
    setCaptchaToken(null)
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  }

  return (
    <>
      <div className='container_service'>
        <div className='container_btn_retorno'>
          <a href="/" className='btn_retorno'><i className='bx bx-left-top-arrow-circle'></i></a>
          <h1 className="text-3xl font-bold text-center mb-10 text-[#4361ee]">{"Acortador url"}</h1>
        </div>
        <ReCaptchaWrapper siteKey={siteKey} onChange={onCaptchaChange} ref={captchaRef} />
        <div className='toggle_tools'>
          <p>{isActiveToggle ? "Quitar código persona" : "Agregar código personal"}</p>
          <ToggleButton onToggle={toggleComponent} />
        </div>
        <FormSaveUrl captchaToken={captchaToken} isActiveToggle={isActiveToggle} resetCaptcha={resetCaptcha} />
      </div>
    </>
  )
}

