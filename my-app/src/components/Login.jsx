import {FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();

            console.log('teste', username, password);

            console.log("Envio"); 
        };
  return (
    <div className="">
    

    <div className="custom-bg h-screen overflow-y-hidden">
        
     <div className=" overflow-x-hidden overflow-hidden">
     
        <h1 className="text-center  text-amber-800 font-custom text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl pt-8">Hematomas</h1>
        <span className="flex items-center justify-center text-amber-900 text-2xl font-custom">
             SkateBoard
        </span>
     
        <div className="container flex justify-center items-center min-h-screen ">
            
            <div className="text-white border-4 rounded-lg p-5 bg-blak bg-gradient-to-r from-black/90 to-black/50 flex items-center justify-center text-center mb-60">
                <form onSubmit={handleSubmit}>
                <h1 className="text-center mb-5 text-3xl ">login</h1>
                <div className="flex items-center  justify-center">
                <FaUser className="icon border rounded-full" />
                        <input className="border-2 border-black rounded-lg text-center m-2 text-black" type="E-mail" placeholder='Digite o seu E-mail' onChange={(e) => setUsername(e.target.value)} />
                
                    
                </div>
                <div className="flex items-center  justify-center mt-5">
                <FaLock className="icon border rounded-full" />
                    <input className="border-2 border-black rounded-lg text-center m-2 text-black" type="Password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" className="m-2"/>
                        Lembrar da Senha
                    </label>
                        <a href="#" className="text-red-500 hover:bg-green-600 px-2 py-1 rounded transition-all duration-300"> Esqueceu a senha ?</a>
                </div>
                        <button className=" hover:bg-green-600 px-2 py-1 rounded transition-all duration-300">Entrar</button>
                        <div className="signup-Link">
                Não Tem uma conta ?  <a href="#" className="text-red-500
                hover:bg-green-600 px-2 py-1 rounded transition-all duration-300">Registra conta</a>
                        </div>
                
                      </form>
                    </div>
            </div>
    </div>
    

    </div>
  
</div>

    
  )
}

export default Login
