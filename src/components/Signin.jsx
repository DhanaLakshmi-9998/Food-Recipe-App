import React,{useState} from "react";
import Navbar from "./Navbar";

const Signin = () =>{
  const [title, setTitle] = useState('');
  function handleClick(e){
    e.preventDefault();
    setTitle({UserId:'',UserName:'',Password:'',Mobile:''})
    alert("Registerd successfully.")
  }
    
    return(
        <div className="w-full bg-gray-200 h-[100vh] ">
            <Navbar/>
            <div className="pt-20 flex flex-col items-center gap-4 justify-center max-[768px]:mx-10">
            <h3 className="text-center font-bold text-2xl py-4">Register Here</h3>

            <form className="border-[2px] md:w-[25vw] max-[768px]:w-full rounded-md p-5 border-gray-500" >
           
                <dl className="w-full">
                    <dt  className="text-lg font-semibold py-2">User Id</dt>
                    <dd>
                        <input required type="text" name="UserId" value={title.UserId}
            onChange={(e) => setTitle(e.target.value)} className="w-full p-1 border-[1px] border-gray-500 rounded-md"/>
                    </dd>
                    
                    <dt className="text-lg font-semibold py-2">User Name</dt>
                    <dd>
                        <input required type="text" name="UserName" value={title.UserName}
            onChange={(e) => setTitle(e.target.value)}  className="w-full p-1 border-[1px] border-gray-500 rounded-md"/>
                    </dd>
                    <dt className="text-lg font-semibold py-2">Password</dt>
                    <dd>
                        <input required type="Password" name="Password" value={title.Password}
            onChange={(e) => setTitle(e.target.value)} className="w-full p-1 border-[1px] border-gray-500 rounded-md"/>
                    </dd>
                    <dt className="text-lg font-semibold py-2">Mobile</dt>
                    <dd>
                        <input required type="text" name="Mobile" value={title.Mobile}
            onChange={(e) => setTitle(e.target.value)} className="w-full p-1 border-[1px] border-gray-500 rounded-md"/>
                    </dd>
                    <button className="w-full bg-black text-white rounded- tmdext-center my-4 p-2" onClick={handleClick}>Register</button>
                </dl>

            </form>

            </div>
            
            

        </div>
    )
    }
    export default Signin
