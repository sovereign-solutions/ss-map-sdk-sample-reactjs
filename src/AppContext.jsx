import React, {createContext, useState} from 'react';

const AppContext = createContext();
const {Provider} = AppContext;

const AppProvider = ({children}) => {
    const [map, setMap] = useState();
    const [detail, setDetail] = useState();

    return (
        <Provider value={{
            map,
            detail,
            setMap,
            setDetail
        }}>
            {children}
        </Provider>
    );
};

export {AppContext, AppProvider};
