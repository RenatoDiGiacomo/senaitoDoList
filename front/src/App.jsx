import React from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";

import { GlobalStyle } from "./GlobalStyle";
import {DataProvider} from "./Hooks/DataProvider";



function App() {

  return (
    <>
      <DataProvider>
        <GlobalStyle />
        <Header />
        <main>
          <Input />
          <List />
        </main>
      </DataProvider>
    </>

  );
}

export default App;
