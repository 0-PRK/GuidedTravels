
import React, { useState } from "react";
// import { PropTypes } from "prop-types";
import { toast } from "react-hot-toast";
import { Container } from "@mui/material";
import { Modal, ModalHeader } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


import img1 from "./images/navLogo.png";

export default function ConfirmPW(props) {
//   const history = useNavigate();

const [password, setPass] = useState("");
const [confirmpassword, setcPass] = useState("");
const navigate = useNavigate();
const user_id = localStorage.getItem("userId");

const { id } = useParams();

const token = localStorage.getItem("accessToken");

const headers = {
  Authorization: token,
  "Content-Type": "application/json",
};


const handleSubmit = async (e) => {
  e.preventDefault();
  const values = {
    // name,
    // username: uname,
    // email,
    pass:password,
    cpass:confirmpassword,
  };



  try {
    // Send the updated settings to the backend API
    const { data } = await axios.patch(
      `http://localhost:4000/user/userProfile/pw/${user_id}`,
      values,
      { headers }
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("Password changed Successfully");
      navigate(`/Dashboard/${user_id}`);
    }
  } catch (error) {
    // Display error message received from the backend
    const errorMessage = error.response.data.message;
    toast.error("Password didnt match");
  }
};



//   async function Submit(e) {
//     e.preventDefault();
//     try {
//       console.log(email);
//       const values = {
//         email,

//       };
//       console.log(values);
//       const res = await axios.post("http://localhost:4000/user/login", values);
//       if (res.error) {
//         toast.error(res.error);
//       } else {
//         props.onFormSwitch(res.data.accessToken);
//         localStorage.setItem("userId", res.data.user_id);
//         toast.success("Logged in successfully");
//         const userId = localStorage.getItem("userId");
//         history(`/Dashboard/${userId}`);
//       }
//     } catch (err) {
//       toast.error("error");
//       console.log(err);
//     }
//   }


  return (
    <div className="center2">
      <div className=" bg5 ">
        <Modal
          className="pop1"
          contentClassName="pop1"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
        >
          <ModalHeader>
            {" "}
            <div className="cross">
              <NavLink className="nav-link " to={`/Dashboard/settings/${user_id}`}>
                <AiFillCloseCircle />
              </NavLink>{" "}
            </div>{" "}
            <img
              src={img1}
              className=" card-img-top"
              alt="Logo"
              width="400"
              height="250"
            />
          </ModalHeader>{" "}
          <br />{" "}
          <h4 className="quicksand18 alignCenter" style={{  color:'grey' }}><b>Please enter your new password.</b></h4>
          <form

          action="POST"
          className="login-form"
          onSubmit={handleSubmit}
          novalidate
          >
          <br/>
        <input
          value={password}
          required
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password "
          placeholder="New-password"
          className="email "
        />
        <br/>
        <input
          value={confirmpassword }
          required
          onChange={(e) => setcPass(e.target.value)}
          type="password"
          id="confirmpassword"
          placeholder="Re-Enter New-password"
          name="Confirmpassword "
          className="email"
        />

            <br />
            <div className="text-center">
              <button type="submit" className=" but btn btn-primary  ">
                <h5>Submit</h5>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};