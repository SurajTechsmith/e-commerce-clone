import React, { useEffect } from "react";
import './App.css';
import { RouterProvider} from "react-router-dom";
import appRouter from './Routes'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
const router=appRouter();
const [{basket},dispatch] = useStateValue();
useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    dispatch({
      type: "SET_USER",
      user:authUser
    })

  }
  else {
    dispatch({
      type:"SET_USER",
      user:null,
    })

  }
})
return ()=>{
  unsubscribe();
}

},[])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
   
  );
}

export default App;
