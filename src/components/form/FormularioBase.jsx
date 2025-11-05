import React from 'react'

function FormularioBase() {
    return (
        <>
            <div className="mx-auto max-w-5xl shadow-md bg-[#ebf0f4] px-8 py-6 font-roboto sm:rounded-xl sm:px-10">
                <div className='flex items-center'>
                    <a href="/" className='btn_retorno'><i className='bx bx-left-top-arrow-circle'></i></a>
                    <h1 className="text-3xl font-bold text-center mx-auto mb-10 text-[#4361ee]">TITULO</h1>
                </div>
                <div className='flex items-center justify-around gap-12 md:flex-row flex-col'>
                    <div className='flex flex-col gap-4'>
                        <label className='flex flex-row items-center justify-between w-full font-semibold text-[#2b2d42]'>
                            Numero:
                            <input
                                className='px-4 py-3 border bg-white rounded-lg outline-none transition-colors duration-300 ease-in-out'
                                type="number"
                                name="paginas"
                                value={32}
                                min={1}
                                style={{ marginLeft: 10 }}
                            />
                        </label>
                        <label className='flex flex-row items-center justify-between w-full font-semibold text-[#2b2d42]'>
                            Orden de enumeracion:
                            <select className='px-2.5 py-2.5 text-base border border-[#ced4da] rounded-lg bg-white outline-none cursor-pointer focus:border-[#3c52b6] focus:shadow-[0_0_0_3px_rgba(67,97,238,0.15)] transition-colors duration-200' name="orden" value={"Ascendente"}>
                                <option value="ascendente">Ascendente</option>
                                <option value="descendente">Descendente</option>
                            </select>
                        </label>
                        <button disabled={true} className='px-5 py-3 text-base font-semibold text-white bg-[#4361ee] rounded-lg cursor-pointer border-none transition-colors duration-300 ease-in-out hover:bg-[#454546] disabled:bg-[#adb5bd] disabled:cursor-not-allowed disabled:opacity-70'>generar</button>
                        <div className='flex items-center justify-around gap-12 md:flex-row flex-col md:gap-12'>
                            <a href="#" className='px-5 py-3 text-base font-semibold text-white bg-[#4361ee] rounded-lg cursor-pointer border-none transition-colors duration-300 ease-in-out hover:bg-[#454546] disabled:bg-[#adb5bd] disabled:cursor-not-allowed disabled:opacity-70'>Descarga pdf</a>
                            <a href="#" className='px-5 py-3 text-base font-semibold text-white bg-[#4361ee] rounded-lg cursor-pointer border-none transition-colors duration-300 ease-in-out hover:bg-[#454546] disabled:bg-[#adb5bd] disabled:cursor-not-allowed disabled:opacity-70'>Descarga pdf</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='flex flex-row items-center justify-between w-full font-semibold text-[#2b2d42]'>
                            Orden de enumeracion:
                            <select className='px-2.5 py-2.5 text-base border border-[#ced4da] rounded-lg bg-white outline-none cursor-pointer focus:border-[#3c52b6] focus:shadow-[0_0_0_3px_rgba(67,97,238,0.15)] transition-colors duration-200' name="orden" value={"Ascendente"}>
                                <option value="ascendente">Ascendente</option>
                                <option value="descendente">Descendente</option>
                            </select>
                        </label>
                        <button className='px-5 py-3 text-base font-semibold text-white bg-[#4361ee] rounded-lg cursor-pointer border-none transition-colors duration-300 ease-in-out hover:bg-[#454546] disabled:bg-[#adb5bd] disabled:cursor-not-allowed disabled:opacity-70'>generar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormularioBase