// import logo from './logo.svg';
import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Navbar1 from "./Components/Navbar";
// import Plan from "./Components/planTrip";
import Navbar2 from "./Components/afterLoginNavbar";
import Home from "./Components/Home";
import Loginhome from "./Components/LoginHome";
import HomeLOGIN from "./Components/afterlogin"
import Settings from "./Components/settings";
import ForgetPW from "./Components/forgetPW";
import ConfirmPW from "./Components/ConfirmPW";
import AddPlace from "./Components/addPlace";
import PlanTrip from "./Components/planTrip";
import NotFound from "./Components/NotFound";
import Protected from "./PrivateRoute";

import { Toaster } from "react-hot-toast";
import Afterlogin from "./Components/afterlogin";

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App() {
  const token=localStorage.getItem("accessToken")

  const [result, setResult] = useState(null);
  const [modal, setmodal] = useState(false);
  const [modal1, setmodal1] = useState(false);
  const [data, setData] = useState(null);
  
  return (
    <>
      <div>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Router>

          {token===null ? (
            <Navbar1 mode="light" setmodal={setmodal} />
          ) : (
            <Navbar2 mode="light"   />
          )}

          <Routes>
            {!token ? (
              <Route
                path="/"
                element={<Home modal={modal} setmodal={setmodal} />}
              />
            ) : (
              <Route
                path="/"
                element={<HomeLOGIN modal={modal} setmodal={setmodal} />}
              />
            )}

            <Route
              path="/Home"
              element={<Home modal={modal} setmodal={setmodal} />}
            />
            <Route
              path="/LoginHome/plans/plan/:id"
              element={
                <Protected>
                  <Loginhome
                    data={data}
                    setData={setData}
                    result={result}
                    setResult={setResult}
                  />
                </Protected>
              }
            />
            <Route
              path="/LoginHome"
              element={
                <Protected>
                  <Loginhome
                    data={data}
                    setData={setData}
                    result={result}
                    setResult={setResult}
                  />
                </Protected>
              }
            />
            <Route
              path="/Login"
              element={
                <Login
                 
                  modal={modal}
                  setmodal={setmodal}
                />
              }
            />
            <Route
              path="/addPlace"
              element={<AddPlace data={data} setData={setData} />}
            />
             <Route
              path="/plantrip"
              element={
                <Protected>
                  <PlanTrip data={data} setData={setData} />
                </Protected>
              }
            /> 

            <Route
              path="/forgetPw"
              element={<ForgetPW modal={modal} setmodal={setmodal} />}
            />

            <Route
              path="/resetpassword/:id"
              element={<ConfirmPW modal={modal} setmodal={setmodal} />}
            />

            <Route
              path="/Register"
              element={<Register modal={modal} setmodal={setmodal} />}
            />
            <Route path="/About" element={<About />} />


            <Route
              path="/Dashboard/settings/:id"
              element={
                <Protected>
                  <Settings modal1={modal1} setmodal1={setmodal1} />
                </Protected>
              }
            />
            <Route
              path="/Dashboard/:id"
              element={
                <Protected>
                  <Afterlogin />
                </Protected>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
