import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import axios from "axios";
import { useEffect} from "react";
import { useAppState } from "./utils/useAppState";



const App = () => {
  // call the me api
  const [,dispatch] = useAppState();
  useEffect(() => {
    const checkAuth = async () =>{
        const token = localStorage.getItem("authtoken");
        if(!token) return;
           
        try{
            const   res = await axios.get("http://localhost:5000/api/auth/me",{
              headers:{
                Authorization:`Bearer ${token}`
              },
            });
            dispatch({
                user:res.data
            })
        }catch(error){
          localStorage.removeItem("authtoken")
        }
    }
    checkAuth();
  }, []);
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
};
export default App;
