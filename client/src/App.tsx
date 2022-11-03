import React, {useEffect} from 'react';
import Shop from "./pages/Shop/Shop";
import {useAppDispatch} from "./hooks/redux";
import {check} from "./store/ActionCreators/userAPI";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(check())
    }, [])

    return <Shop/>
};

export default App;