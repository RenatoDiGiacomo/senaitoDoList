import React from "react";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider } 