import React, { useEffect } from "react";
import './App.css';
import { RouterProvider} from "react-router-dom";
import appRouter from './Routes'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
function App() {
const router=appRouter();
const [{},dispatch] = useStateValue();
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      console.log("User is logged in:", authUser);
      dispatch({
        type: "SET_USER",
        user: authUser
      });
    } else {
      console.log("User is logged out");
      dispatch({
        type: "SET_USER",
        user: null
      });
    }
  });

  return () => {
    unsubscribe();
  };
}, [dispatch]);

  return (<>


    <RouterProvider router={router}>
 
    </RouterProvider>
    
 <ToastContainer />  </>
   
  );
}

export default App;
