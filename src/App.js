import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar";
import SectionsGrid from "./components/Grid";
import SourceBar from "./components/SourceBar";
import CommonModal from "./components/Modal/Modal";
import "@fontsource/roboto";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <Container>
            <NavBar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SectionsGrid />} />
                <Route path="/:name" element={<SourceBar />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BrowserRouter>
          </Container>
          <CommonModal />
        </React.Fragment>
      </PersistGate>
    </Provider>
  );
};

export default App;
