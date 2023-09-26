import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.js";
import { Agenda } from "./views/Agenda.js";
import { AddContact } from "./views/AddContact.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import AddContactButton from "./component/AddContactButton.js";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <AddContactButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda/:getid" element={<Agenda />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);