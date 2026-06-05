import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyRound } from "lucide-react";

import AuthDivider from "../../components/auth/AuthDivider";
import SocialLoginButtons from "../../components/auth/SocialLoginButtons";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (login(account, password)) {
      navigate("/");
      return;
    }

    setError("Invalid account or password.");
  };

  return (
    <div className="w-full max-w-[400px] py-8 md:py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-ww-text-bright">Log in</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="account" className="mb-1.5 block text-sm text-ww-text-bright">
            Email
          </label>
          <input
            id="account"
            name="account"
            type="text"
            placeholder="Email"
            autoComplete="username"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full rounded-md border border-ww-border bg-ww-panel px-4 py-3 text-sm text-ww-text-bright outline-none transition placeholder:text-ww-text-dim focus:border-ww-accent"
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="password" className="text-sm text-ww-text-bright">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-ww-text-dim underline transition hover:text-ww-accent"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-ww-border bg-ww-panel px-4 py-3 text-sm text-ww-text-bright outline-none transition placeholder:text-ww-text-dim focus:border-ww-accent"
          />
        </div>

        {error && <p className="text-center text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-md bg-gradient-to-r from-[#5eb3ff] to-ww-accent py-3 text-sm font-bold text-white transition hover:brightness-110"
        >
          Log in
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-ww-border py-3 text-sm font-semibold text-ww-text-bright transition hover:bg-ww-panel"
        >
          <KeyRound size={16} />
          Log in with passkey
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-ww-text-dim">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="font-semibold !text-ww-accent hover:underline">
          Sign up
        </Link>
      </p>

      <AuthDivider />
      <SocialLoginButtons />
    </div>
  );
};

export default Login;
