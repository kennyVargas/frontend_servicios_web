import React from 'react'

export const Mensaje = ({ enlace, url, texto, color }) => {
    return (
        <div className='enlaces'>
            {enlace && <span>Enlace acortado: <a className='link' href={url} target="_blank" >{enlace}</a> </span>}
            {texto && <p style={{ color:color}} >{texto}</p>}
        </div>
    )
}
