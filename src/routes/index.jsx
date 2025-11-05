import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QrGeneratorPage } from "../features/qr-generator/QrGeneratorPage"
import { PdfFoleadorPage } from "../features/pdf-foleador/PdfFoleadorPage"
import { UrlShortenerPage } from "../features/url-shortener/UrlShortenerPage"
import Navegacion from "../features/Navegacion"
import FormularioBase from '../components/form/FormularioBase';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navegacion />} />
                <Route path="/qr-generator" element={<QrGeneratorPage />} />
                <Route path="/pdf-generator" element={<PdfFoleadorPage />} />
                <Route path="/url-shortener" element={<UrlShortenerPage />} />
                <Route path="/form-base" element={<FormularioBase />} />
                {/* Más rutas aquí */}
            </Routes>
        </Router>

    );
}
export default AppRoutes;