import React, {useEffect, useState} from 'react';
import Admin from "./pages/Admin/Admin";
import {fetchCategories} from "./http/itemsAPI";

const App = () => {
    const [categories, setCategories] = useState<String[]>(['',''])

    useEffect(() => {
        fetchCategories().then(data => setCategories(data))
    }, [])

    return (
        <div>
            <Admin/>
            <div>
                {categories!.map(i => (
                    <p>{i}</p>
                ))}
            </div>
        </div>
    );
};

export default App;