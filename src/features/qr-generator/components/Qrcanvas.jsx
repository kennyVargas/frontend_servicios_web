import React, { useRef, useEffect } from 'react';

export const Qrcanvas = ({ base64Image, filename = 'image.png' }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!base64Image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.crossOrigin = 'anonymous'; // Útil si la imagen viene de otro dominio
        img.src = base64Image;

        img.onload = () => {
            // Ajustar el tamaño del canvas al de la imagen
            canvas.width = img.width;
            canvas.height = img.height;

            // Dibujar la imagen en el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };

        img.onerror = () => {
            console.error('Error al cargar la imagen desde Base64');
        };
    }, [base64Image]);

    const handleDownload = () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png'); // Puedes usar 'image/jpeg' si prefieres
        link.click();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Canvas oculto o visible según necesites */}
            <canvas
                ref={canvasRef}
            />
            <button className='boton' onClick={handleDownload} disabled={!base64Image}>
                {base64Image ? 'Descargar Imagen' : 'Cargando...'}
            </button>
        </div>
    );
}
