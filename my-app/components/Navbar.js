// NavigationBar.js
import ItemContext from "@/Context/ItemContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext, useEffect } from "react";

const NavigationBar = () => {
  const { data: session } = useSession();
  const ctx = useContext(ItemContext);
  useEffect(() => {
    session ? ctx.setIsAdmin(true) : ctx.setIsAdmin(false);
  }, [session]);
  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="bg-orange-300 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Your logo or site name */}
          <img
            className="h-16 w-16"
            src="https://static.vecteezy.com/system/resources/thumbnails/024/043/963/small/book-icon-clipart-transparent-background-free-png.png"
          />
        </div>
        <div className="flex items-center">
          {session ? (
            // If user is signed in
            <>
              <img
                src={session.user.image}
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <button
                onClick={handleSignOut}
                className="text-white hover:text-gray-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            // If user is not signed in
            <>
              <button
                onClick={handleSignIn}
                className="text-white hover:text-gray-300 mr-4"
              >
                Sign In
              </button>
              <button className="text-white hover:text-gray-300">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
