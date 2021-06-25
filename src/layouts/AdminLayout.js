import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUserStart } from "./../redux/User/user.actions";

import Header from "./../components/Header";
import VerticalNav from "./../components/VerticalNav";
import Footer from "./../components/Footer";
import ChatsWrapper from "./ChatsWrapper";


const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin/manageproducts">Manage Products</Link>
              </li>
              <li>
                <Link to="/admin/managerequests">Manage Requests</Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">{props.children}</div>
      </div>
      <ChatsWrapper></ChatsWrapper>
      <Footer />
    </div>
  );
};

export default AdminLayout;
