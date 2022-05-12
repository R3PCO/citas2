
import { useState, useEffect } from "react";
import Error from './Error';

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente} ) => {
  
  const [nombre,setNombre] = useState('');
  // el valor inicial "hook" queda almacenado en la variable nombre.
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error, setEerror] = useState(false);
/*
  useEffect( () =>{

    console.log(paciente)

  },[ paciente ] );

  useEffect( () =>{

   console.log('Elcomponente esta listo')

  },[  ] );
 */
  useEffect( () =>{

    if (Object.keys(paciente).length > 0){

      //console.log('si hay algo');
      //console.log (paciente);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }else{

      console.log('no hay nada');

    }
 
   },[ paciente ] );
  
  //console.log(paciente)
  
  const generarId = () =>{
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)


  return random + fecha

  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // validacion del formulario.
    if ( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
        console.log("hay al menos un campo vacío")
        setEerror(true)
        return
    } 
    /*else{
        console.log( "Todos llenos")
    }*/

    // volvmeos error al estaodo de falso
    setEerror(false)

    // Creamos el objeto paciente
    const objetoPaciente ={
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
     // id:generarId()

    }

    if(paciente.id){
      // Editando el registro
      /*console.log("vamos a editar")*/
      objetoPaciente.id = paciente.id
      console.log( objetoPaciente )
      console.log(paciente)
      
      // Agregamos a una neuva lista actualizada
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState )
      
      // modificamos el arreglo de pacientes con el nuevo arreglo con setPacientes
      setPacientes( pacientesActualizados)

      //lo regresamos a un objeto vacio
      setPaciente({ })
      
    }else{
      // Nuevo registro
      /*console.log('Nuevo registo efectuado')*/
      objetoPaciente.id = generarId();
      setPacientes([...pacientes,objetoPaciente]);

    }
    
    
    //console.log("enviando formulario")

   // console.log(objetoPaciente)

    /* usando la función modificamos el state del APPJs agregando 
    el objetoPacientes*/
    //setPacientes(objetoPaciente)
  // setPacientes([...pacientes,objetoPaciente]);

   /*Reiniciamos el formulario */

   setNombre('')
   setPropietario('')
   setEmail('')
   setFecha('')
   setSintomas('') 
  }
  return (
    <div className="md:w-1/2 lg:w-2/5" >
      
      <h2 className= 'font-black text-3xl text-center'> Seguimiento Pacientes</h2>

      <p className= 'text-lg mt-5 text-center mb-10'>
        Añade Paciente y {''}
        <span className = 'text-indigo-600 font-bold '> Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}// Usamos la función
        className = 'bg-white shadow-md rounded-lg py-10 px-1.5 '>
        
        { error && <Error>
                    <p>'Todos los campos son obligatorios' </p>   
                    </Error>
                                 
                    }
             
        <div className='mb-5 ml-5 mr-5'>
            <label htmlFor="mascota" className = 'block text-gray-700 uppercase font-bold'>
              Nombre de la mascota
            </label>

            <input
              id="mascota"
              type = "text"
              placeholder= "Nombre de la mascota"
              className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange = {(e) => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-5 ml-5 mr-5'>
            <label htmlFor="propietario" className = 'block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
             
            <input
              id="propietario"
              type = "text"
              placeholder="Nombre del propietario"
              className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange = {(e) => setPropietario(e.target.value)}
            />
        </div>
        <div className='mb-5 ml-5 mr-5'>
            <label htmlFor="email" className = 'block text-gray-700 uppercase font-bold'>E-mail del propietario</label>
             
            <input
              id="email"
              type = "email"
              placeholder="Email contacto propietario"
              className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='mb-5 ml-5 mr-5'>
            <label htmlFor="alta" className = 'block text-gray-700 uppercase font-bold'>alta</label>
             
            <input
              id="alta"
              type = "date"
              className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange = {(e) => setFecha(e.target.value)}
            />
        </div>

        <div className='mb-5 ml-5 mr-5'>
            <label htmlFor="sintomas" className = 'block text-gray-700 uppercase font-bold'>Sintomas</label>
             
            <textarea
              id="sintomas"
              placeholder="Describe los sintomas"
              className= "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
              value={sintomas}
              onChange = {(e) => setSintomas(e.target.value)}
            />
        </div>
        <input
          type="submit"
          className="bg-indigo-700 w-full p-3 text-white uppercase font-bolt 
          hover:bg-indigo-800 cursor-pointer transition-colors"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
        />
        
      </form>
    </div>
  )
}

export default Formulario; 
