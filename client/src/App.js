import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';

function App() {
  const [telefone, setTelefone] = useState(''); 
  const [listaTelefone, setListaTelefone] = useState([]); 
  const [novoTelefone, setNovoTelefone] = useState(''); 


  useEffect(()=>{
    axios.get("http://localhost:3001/api/get").then((response)=>{
      setListaTelefone(response.data); 
    }); 
  });

  const submitForm = () =>{
    axios.post("http://localhost:3001/api/insert", {
      telefone: telefone
    }); 
  }; 

  const deleteContato = (telefone) =>{
    axios.delete(`http://localhost:3001/api/delete/${telefone}`); 
  }; 

  const updateContato = (telefone) => {
    axios.put("http://localhost:3001/api/update", {novoTelefone: novoTelefone, telefone: telefone}); 
    setNovoTelefone(''); 
  }; 

  return (
    <div className="container">
      <div className="mt-2 row">
        <div className="input-group mt-2">
          <input className="form-control" aria-describedby="enviar" type="text" name="telefone" onChange={(e)=>{setTelefone(e.target.value);}}/>
          <button className="btn btn-outline-secondary" type="button" id="enviar" onClick={submitForm}>Inserir</button>
        </div>
      </div>
      <div className="row">
        {
          listaTelefone.map((value,i)=>{
            return (
              <div key={i} className="col-4 mt-2">
                <div className="card text-center">
                  <div className='card-header'>
                    <input className="form-control" 
                      type="text" 
                      defaultValue={value.telefone} 
                      name="novoTelefone" 
                      onChange={(e)=>{
                        setNovoTelefone(e.target.value)
                      }
                    }/>
                  </div>
                  <div className='card-body'>
                    <button type="button" className="btn btn-outline-primary" onClick={()=>{updateContato(value.telefone)}}>Alterar</button>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteContato(value.telefone)}}>Excluir</button>
                  </div>  
                </div>
              </div>
            );  
          })
        }
      </div>
    </div>
  );
}

export default App;
