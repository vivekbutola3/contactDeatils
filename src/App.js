import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./Components/ContactPage/contactPage";
import Main from "./Components/Main/main";
import ViewContact from "./Components/ContactPage/viewContact/viewContact";
import EditContactModal from "./Components/ContactPage/viewContact/EditContact";
import DeleteConfirmationModal from "./Components/ContactPage/viewContact/DeleteContact";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/create-contact" element={<ContactPage />} />{" "}
          <Route path="/view-contact" element={<ViewContact />} />
          <Route
            path="/edit-contact-details/:id"
            element={<EditContactModal />}
          />
          <Route path="/deleteModel" element={<DeleteConfirmationModal />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
