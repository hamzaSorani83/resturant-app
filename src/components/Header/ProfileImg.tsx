import UserProfile from '../../img/avatar.png';
import { MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config';
import { UserCredential } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUser, setUser } from '../../store/features/loginReducer';
import { selectOverlay, setLoading, setOverlay } from '../../store/features/mainReducer';

import { Nav } from '../';

const ProfileImg = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const isMenu = useAppSelector(selectOverlay);
  
  const setIsMenuHandler = (state: boolean) => {
    dispatch(setOverlay(state));
  }
  
  const login = async () => {
    if (user == null) {
      dispatch(setLoading(true));
      const response: UserCredential = await signInWithPopup(firebaseAuth, provider);
      dispatch(setUser(response.user.providerData[0]));
      dispatch(setLoading(false));
      localStorage.setItem('user', JSON.stringify(response.user.providerData[0]));
    } else {
      setIsMenuHandler(!isMenu);
    }
  }
  
  const logout = () => {
    setIsMenuHandler(false);
    localStorage.clear();
    dispatch(setUser(null));
  };
  
  let createItem = <></>;
    if (user && user.email === "hamzasorani83@gmail.com") {
      createItem = (
          <Link to={"/createItem"}>
            <p className="ProfileDropdownItem" onClick={() => setIsMenuHandler(false)}> New Item <MdAdd /> </p>
          </Link>
        );
    }
  
  return (
    <div className='Profile'  onClick={login}>
    <motion.img whileTap={{ scale: 0.6 }} src={UserProfile} alt="user profile" />
      {isMenu && (
        <motion.div className="ProfileDropdown" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}>
          {createItem}
          <Nav className="Nav-Col" />
          <p className="ProfileDropdownItem" onClick={logout}> Logout <MdLogout /></p>
        </motion.div>
      )}
  </div>
  )
}

export default ProfileImg