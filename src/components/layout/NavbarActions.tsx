import KarmaDropdown from "./KarmaDropdown";
import LoggedInUserMenu from "./LoggedInUserMenu";
import NotificationsDropdown from "./NotificationsDropdown";
import UserMenuDropdown from "./UserMenuDropdown";
import { useAuth } from "../../context/AuthContext";

const NavbarActions = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <KarmaDropdown />
        <NotificationsDropdown />
        <LoggedInUserMenu />
      </div>
    );
  }

  return <UserMenuDropdown />;
};

export default NavbarActions;
