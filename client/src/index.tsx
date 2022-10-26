import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    RouterProvider, Routes
} from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import App from "./App";
import Shop from "./pages/Shop/Shop";
import {setupStore} from "./store/store";
import Item from "./pages/Item/Item";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={setupStore()}>
           <BrowserRouter>
               <Routes>
                   <Route path="admin" element={<Admin/>}/>
                   <Route path="shop" element={<App/>}/>
                   <Route path="item/:id" element={<Item/>}/>
                   <Route path="*" element={<App/>}/>
               </Routes>
           </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
