import React from "react";
import CardServicios from "../components/servicio/CardServicios";
/**
 * se usa la libreria de boxicons para los iconos
 * https://v2.boxicons.com/
 * <i class='bx bx-qr'></i>
 * boxIconClass={"bx bx-qr"}
 */
function Navegacion() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1
        className="text-3xl font-bold text-center mb-10 text-gray-800"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        SERVICIOS VARIOS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        <CardServicios
          boxIconClass={"bx bx-qr"}
          colorIcon={"blue"}
          enlace={"/qr-generator"}
          titulo={"Generador de QR"}
          descripcion={
            "Genera códigos QR a partir de textos, URLs, correos y más. Los códigos pueden mostrarse directamente en la web como imágenes, listos para usar."
          }
        />
        <CardServicios
          boxIconClass={"bx bxs-file-pdf"}
          colorIcon={"red"}
          enlace={"/pdf-generator"}
          titulo={"Generador de PDF foleados"}
          descripcion={
            "Crea un PDF en blanco con numeración o foliado, configurable en tamaño de letra, posición del número, tipo de numeración y cantidad de hojas."
          }
        />
        <CardServicios
          boxIconClass={"bx bx-link"}
          colorIcon={"green"}
          enlace={"/url-shortener"}
          titulo={"Acortador de enlaces"}
          descripcion={
            "Un acortador de enlaces (o acortador de URLs) es una herramienta que convierte una URL larga en una versión mucho más corta y fácil de compartir."
          }
        />
        {/* 
        <CardServicios
          boxIconClass={"bx bx-search"}
          colorIcon={"orange"}
          enlace={"/form-base"}
          titulo={"Pruebas de STYLE"}
          descripcion={
            "Un acortador de enlaces (o acortador de URLs) es una herramienta que convierte una URL larga en una versión mucho más corta y fácil de compartir."
          }
        /> */}
      </div>
    </div>
  );
}

export default Navegacion;
