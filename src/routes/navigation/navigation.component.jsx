import { Outlet } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { ReactComponent as PencilLogo } from "../../asset/pencil-svgrepo-com.svg";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLinksContainer,
} from "./navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [isManager, setIsManager] = useState(false);
  useEffect(() => {
    if (currentUser) {
      // if a current user is loged in
      // we retrieved its info from context and check the role of the user
      // base on these flags we deterement which Link to render
      const role = currentUser.roles[0];
      if (role === "ROLE_AUTHOR") {
        setIsAuthor(true);
      } else if (role === "ROLE_EDITOR") {
        setIsEditor(true);
      } else if (role === "ROLE_MANAGER") {
        setIsManager(true);
      }
    } else {
      // if the current user is null, which means the website is in a logged out status
      // so we reset all these status to false
      setIsAuthor(false);
      setIsManager(false);
      setIsEditor(false);
    }
  }, [currentUser]);

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <PencilLogo />
        </LogoContainer>
        <NavLinksContainer className="nav-links-container">
          {currentUser && <NavLinks to="/myprofile">My Profile</NavLinks>}
          {isAuthor && <NavLinks to="/myproducts">My Products</NavLinks>}
          {isEditor && (
            <NavLinks to="/editingproducts">My Editing Products</NavLinks>
          )}
          {isManager && <NavLinks to="/products">All Products</NavLinks>}
          {isManager && <NavLinks to="/users">All users</NavLinks>}
          {currentUser ? (
            <NavLinks as={"span"} onClick={AuthService.signOut}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
