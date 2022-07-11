import { useLocation } from "react-router-dom";
import UserProfileList from "../../component/user-profile-list/user-profile-list.component";
const ProfilePage = () => {
  const location = useLocation();
  const userData = location.state;
  return <UserProfileList userData={userData}></UserProfileList>;
};

export default ProfilePage;
