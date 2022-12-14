import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserState } from "../../features/auth/authSlice";
import { ProfileCard } from "./ProfileCard";


export const Profile = () => {
const { isLoggedIn } = useSelector(selectUserState);
console.log(isLoggedIn);
  return (
    <div>
      {isLoggedIn ? <ProfileCard /> : <Navigate to='/auth/signin'/>}
      {/* <ProfileCard /> */}
    </div>
  );
};
