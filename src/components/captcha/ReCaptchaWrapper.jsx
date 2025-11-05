import ReCAPTCHA from 'react-google-recaptcha';

export const ReCaptchaWrapper = ({ siteKey, onChange, ref }) => {
  if (!siteKey) return null;

  return (
    <div style={{ margin: '1rem 0' }}>
      <ReCAPTCHA sitekey={siteKey} onChange={onChange} ref={ref} />
    </div>
  );
};

