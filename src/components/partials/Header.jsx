import { useSelector } from "react-redux";
import { Container, NavButtons, Logo } from "../";
import { Link } from "react-router-dom";

export const Header = () => {
    const authState = useSelector((state) => state.auth);
  return (
    <div className="bg-gray-900 shadow-lg">
      <Container>
        <nav className="flex flex-col justify-center gap-8 md:gap-0 md:flex-row md:justify-between py-4 text-white flex-wrap items-center">
          {/* Logo Section */}
          <Logo />
          {authState.status && (
            <div>
              <Link
                to="/all-post"
                className="font-semibold bg-gray-700 px-6 py-3 rounded me-2"
              >
                All Posts
              </Link>
              <Link
                to="/add-post"
                className="font-semibold bg-gray-700 px-6 py-3 rounded ms-2"
              >
                Add New Post
              </Link>
            </div>
          )}

          <NavButtons />
        </nav>
      </Container>
    </div>
  );
};
