import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import App from "./App";
import {setupStore} from "./store/store";
import Item from "./pages/Item/Item";
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/Auth/SignUp";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={setupStore()}>
           <BrowserRouter>
               <Routes>
                   <Route path="shop" element={<App/>}/>
                   <Route path="auth" element={<Auth/>}/>
                   <Route path="signup" element={<SignUp/>}/>
                   <Route path="item/:id" element={<Item/>}/>
                   <Route path="*" element={<App/>}/>
               </Routes>
           </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
