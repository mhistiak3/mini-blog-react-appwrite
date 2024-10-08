import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./app/auth.service";
import { login, logout } from "./store/auth.slice";
import { Footer, Header } from "./components";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Check if user is logged in
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => (user ? dispatch(login({ user })) : dispatch(logout())))
      .catch(() => dispatch(logout()))
      .finally(() => setLoading(false));
  }, []);

  // Render loading page
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <main >
        <Home/>
      </main>
      <Footer />
    </div>
  );
};
export default App;
