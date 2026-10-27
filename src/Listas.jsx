import Cards from "./Cards";
import { useState } from "react";

const Listas = () => {
  const canciones = [
    { id:1, nombre: "Alone", imagen: 'alone.png'},
    { id:2, nombre: "Faded" , imagen: 'faded.png'},
    { id:3, nombre: "On My Way", imagen: 'onwy may.png'},
    { id:4, nombre: "Darkside", imagen: 'dar.png'},
    { id:5, nombre: "Play", imagen: 'play.png'},
  ];
   const [total, setTotal] = useState(0);
   const [busqueda, setBusqueda] = useState("");

   const cancionesFiltradas = canciones.filter((cancion) =>
      cancion.nombre.toLowerCase().includes(busqueda.toLowerCase()),  
  ); 
  return (
    <div style={{
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
        <h1> Total de Likes de Canciones: {total}</h1>
        
         <input 
         style={{
          padding: "10px",
          marginBottom: "20px",
          width: "300px",
          border: "1px solid #050101",
          borderRadius: "5px",
         }}
         type="text"
         placeholder="Ingrese el nombre de una cancion"
         value={busqueda}
         onChange={(e) => { 
              setBusqueda(e.target.value);
         }}
         />
        <div style={{display: "flex", gap: '10px'}}>
          {cancionesFiltradas.length == 0 && (
            <p style={{ color: "#ccc", fontSize: "20px" }}>
              No se encontraron canciones con el nombre: {busqueda}
            </p>
          )}
          {cancionesFiltradas.map((cancion) => {
         return (
         <Cards key={cancion.id} 
         nombre={cancion.nombre}
         img={cancion.imagen} 
         onLike={() => {
          setTotal(total + 1);
         }}
         />
         );
       })}
        </div>
    </div>
  );
};

export default Listas;