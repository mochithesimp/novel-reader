import { Navigate } from "react-router-dom";

import MyPurchasesEmptyState from "../../components/purchases/MyPurchasesEmptyState";
import { useAuth } from "../../context/AuthContext";

const MyAudiobooks = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] flex-col bg-ww-bg sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-72px)]">
      <div className="ww-container flex w-full flex-1 flex-col py-8 pb-16">
        <h1 className="text-3xl font-bold text-ww-text-bright md:text-4xl">
          My Audiobooks
        </h1>

        <MyPurchasesEmptyState message="You have not purchased any Audiobooks" />
      </div>
    </section>
  );
};

export default MyAudiobooks;
