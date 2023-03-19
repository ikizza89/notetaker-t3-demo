import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Header = () => {
  const { data: sessionData } = useSession();
  return (
    <header className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name
          ? `Welcome, ${sessionData.user.name}`
          : "Notetaker"}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <div
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
