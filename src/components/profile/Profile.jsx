import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserState } from "../../features/auth/authSlice";
import { ProfileCard } from "./ProfileCard";


export const Profile = () => {
const { isLoggedIn } = useSelector(selectUserState);
  return (
    <div>
      {isLoggedIn && <ProfileCard /> 
      }
      {!isLoggedIn &&
      <Navigate to='/auth/signin'/>
      }
      {/* <ProfileCard /> */}
    </div>
  );
};
