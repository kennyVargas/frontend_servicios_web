import React from 'react'

function CardServicios({ boxIconClass, colorIcon = "black", enlace, titulo, descripcion }) {
    return (
        <div className={`shadow-md bg-[#ebf0f4] font-roboto px-4 py-4 hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 text-center border border-gray-200 hover:border-gray-400`}
        >
            <div className="flex flex-col items-center space-y-4">
                <div className={`text-5xl px-4 py-4 text-6xl border-1 border-solid rounded-lg`} style={{ color: colorIcon }}><i className={`${boxIconClass} `}></i></div>
                <h3 className="text-lg font-semibold text-[#4361ee]">{titulo}</h3>
                <div className="text-gray-600 text-sm">
                    <p>{descripcion}</p>
                </div>

                <a href={enlace}
                    className='bg-blue-500 hover:bg-gray-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md transition duration-500 ease-in-out'
                >
                    Ver mas
                </a>
            </div>
        </div >
    )
}
export default CardServicios