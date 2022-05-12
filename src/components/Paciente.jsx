
import React from 'react'
/*
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert.css'
*/
const Paciente = ( {paciente, setPaciente, eliminarPaciente} ) => {
  
const { nombre, propietario, email, fecha, sintomas, id } = paciente

const handleEliminar = () =>{

  const respuesta = confirm('Deseas eliminarlo');

  if( respuesta){

      eliminarPaciente(id)
  }

}
/*
const handleEliminar = () =>{

      //console.log( "Eliminando-----",id)
      Swal.fire({

        title:'Estas seguro de eliminar',
        text: "No puedes revertir la acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Si, eliminalo'
      }).then((result) =>{
        if( result.isCofirmed){
              eliminarPaciente(id);
              Swal.fire(
                'Elmiminado',
                'Tu paciente se ha eliminado',
                'Exitosamente'
              )
          }
      })
              
}

*/



  return (
    <div className='m-3 bg-white shadow-md px-5 py-10'>
      
      <p className = "font-bold mb-3 text-gray-700 uppercase">
        Nombre:{"  "}
        <span className='font-normal normal-case'>
           { nombre} 
        </span>
      </p>
      <p className = "font-bold mb-3 text-gray-700 uppercase">
        Propietario:{"  "}
        <span className='font-normal normal-case'>
            { propietario}
        </span>
      </p>
      <p className = "font-bold mb-3 text-gray-700 uppercase">
        Email:{"  "}
        <span className='font-normal normal-case'>
            { email }
        </span>
      </p>
      <p className = "font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{"  "}
        <span className='font-normal normal-case'>
            { fecha }
        </span>
      </p>
      <p className = "font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{"  "}
        <span className='font-normal normal-case'>
            { sintomas }
        </span>
      </p>
      <div className='flex justiffy- justify-between mt-10'>
        <button
          type= 'button'
          className = "py-2 px-10  bg-indigo-600  hover:bg-indigo-900 text-white uppercase rounded-md"
          onClick = { () => setPaciente(paciente) }        
        > Editar
         </button>
        <button
          type= 'button'
          className =  "py-2 px-10 bg-red-600  hover:bg-red-900 text-white uppercase rounded-md"
          //onClick = { () => eliminarPaciente(id) }
          onClick = { handleEliminar }
        > Eliminar
        </button>

      </div>
    </div>
  )
}

export default Paciente
