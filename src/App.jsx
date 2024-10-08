import { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import authService from "./app/auth.service";
import { login, logout } from "./store/auth.slice";
import { Footer, Header, Loader, ProtectedLayout, RedirectLayout } from "./components";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AllPost from "./pages/AllPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Post from "./pages/PostDetails";

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
    return <Loader />;
  }
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <RedirectLayout>
                <Login />
              </RedirectLayout>
            }
          />
          <Route
            path="/register"
            element={
              <RedirectLayout>
                <Register />
              </RedirectLayout>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/all-post"
            element={
              <ProtectedLayout>
                <AllPost />
              </ProtectedLayout>
            }
          />
          <Route
            path="/add-post"
            element={
              <ProtectedLayout>
                <AddPost />
              </ProtectedLayout>
            }
          />
          <Route
            path="/edit-post/:slug"
            element={
              <ProtectedLayout>
                <EditPost />
              </ProtectedLayout>
            }
          />
          <Route
            path="/post/:slug"
            element={
              <ProtectedLayout>
                <Post />
              </ProtectedLayout>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default App;
