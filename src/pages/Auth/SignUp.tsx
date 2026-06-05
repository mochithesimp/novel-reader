import { Link } from "react-router-dom";

import AuthDivider from "../../components/auth/AuthDivider";
import AuthField from "../../components/auth/AuthField";
import SocialLoginButtons from "../../components/auth/SocialLoginButtons";

const SignUp = () => (
  <div className="w-full max-w-[400px] py-8 md:py-12">
    <h1 className="mb-8 text-center text-3xl font-bold text-ww-text-bright">
      Create a New Account
    </h1>

    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <AuthField
        id="username"
        label="Username"
        placeholder="Username"
        autoComplete="username"
      />

      <AuthField
        id="email"
        label="Email Address"
        type="email"
        placeholder="Email"
        autoComplete="email"
      />

      <AuthField
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />

      <AuthField
        id="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="Confirm Password"
        autoComplete="new-password"
      />

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ww-text">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-ww-border accent-ww-accent"
        />
        <span>
          I have read and agree to{" "}
          <a href="#" className="text-ww-text-bright underline hover:text-ww-accent">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-ww-text-bright underline hover:text-ww-accent">
            Terms of Use
          </a>
          .
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ww-text">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-ww-border accent-ww-accent"
        />
        <span>
          By ticking this box, you agree to receive marketing related electronic
          communications from Wuxiaworld.
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-md bg-ww-accent py-3 text-sm font-bold text-white transition hover:brightness-110"
      >
        Sign up
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-ww-text-dim">
      Already have an account?{" "}
      <Link to="/login" className="font-semibold !text-ww-accent hover:underline">
        Log In
      </Link>
    </p>

    <AuthDivider />
    <SocialLoginButtons />
  </div>
);

export default SignUp;
