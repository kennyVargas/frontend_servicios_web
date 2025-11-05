// src/components/Captcha/useCaptchaSiteKey.js
import { useEffect, useState } from 'react';
import { URL } from '../../const/constantes';

export const useCaptchaSiteKey = () => {
  const [siteKey, setSiteKey] = useState('');

  useEffect(() => {
    const obtenerClaveCaptcha = async () => {
      try {
        const response = await fetch(`${URL}/api/captcha`);
        const res = await response.json();
        if (res?.data) setSiteKey(res.data);
      } catch (error) {
        console.error('Error al obtener la clave de reCAPTCHA:', error);
      }
    };

    obtenerClaveCaptcha();
  }, []);

  return siteKey;
};
