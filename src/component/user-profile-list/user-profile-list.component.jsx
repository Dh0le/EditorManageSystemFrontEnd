import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import {
  ProfileContainer,
  ProfileListContainer,
} from "./user-profile-list.styles";
import { useEffect, useContext } from "react";
const UserProfileList = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);
  return (
    <ProfileListContainer>
      <ProfileContainer>
        <h2>{currentUser.username}</h2>
        <p>{currentUser.email}</p>
        <p>{currentUser.roles[0]}</p>
      </ProfileContainer>
    </ProfileListContainer>
  );
};
export default UserProfileList;
