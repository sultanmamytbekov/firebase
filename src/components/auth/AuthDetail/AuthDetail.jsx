import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../../firebase";
import "./index.scss";
const AuthDetail = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  function deleter() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log(e));
  }
  console.log(authUser);
  return (
    <div id="authDetail">
      <div className="container">
        <div className="authDetail">
          {authUser ? (
            <div>
              {authUser.photoURL ? (
                <img src={authUser.photoURL} alt="" />
              ) : (
                <div className="img">
                  <h1>{authUser.email[0].toUpperCase()}</h1>
                </div>
              )}
              <h1>{`Signed in as ${authUser.email}`}</h1>
              <button onClick={deleter}>Sign Out</button>
            </div>
          ) : (
            <button className="delBtn">
              <NavLink to="/signin">Create an account</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthDetail;
