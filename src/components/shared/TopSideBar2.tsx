import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";
import { Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import TopbarSearch2 from "@/_root/pages/TopBarSearch2.tsx";

const TopSideBar2 = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        {/* Навигация */}
        <nav className="flex gap-6 items-center">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <NavLink
                key={link.label}
                to={link.route}
                className={`flex items-center gap-2 text-sm font-medium transition ${
                  isActive
                    ? "text-primary-500 font-semibold"
                    : "text-gray-600 hover:text-primary-500"
                }`}
              >
                <img
                  src={link.imgURL}
                  alt={link.label}
                  className="w-5 h-5"
                />
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Search */}
        <TopbarSearch2/>

        {/* Профиль или загрузка */}
        <div className="flex items-center gap-4">
          {isLoading || !user.email ? (
            <Loader />
          ) : (
            <Link to={`/profile/${user.id}`} className="flex items-center gap-3">
              <img
                src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="hidden md:flex flex-col">
                <p className="font-semibold">{user.fullName}</p>
                <p className="text-xs text-gray-500">@{user.username}</p>
              </div>
            </Link>
          )}
          {/* Logout */}
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={(e) => handleSignOut(e)}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
            <p className="text-sm hidden md:block">Logout</p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopSideBar2;
