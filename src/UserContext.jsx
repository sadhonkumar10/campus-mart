import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const creactemail = "sadhonkumardey750@gmail.com";
  const creactPassword = "632571";

 
  const login = (email, password) => {
    if (email === creactemail && password === creactPassword) {
      setUser({ email });
      return { success: true };
    } else {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
  };

 
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
