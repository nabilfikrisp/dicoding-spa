import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { getUserLogged } from "../utils/network-data";

const UserContext = createContext();

export const useUserContext = () => {
  const contextValue = useContext(UserContext);
  if (!contextValue) {
    throw new Error("useNotesContext must be used within a NotesProvider");
  }
  return contextValue;
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const { error, data } = await getUserLogged();
      if (error) {
        return;
      }
      setUser(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  const contextValue = {
    user,
    setUser,
    loading,
    setLoading,
    fetchProfile,
    logout,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
