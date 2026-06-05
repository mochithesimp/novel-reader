import AuthField from "../../components/auth/AuthField";

const ForgotPassword = () => (
  <div className="w-full max-w-[400px] py-8 md:py-12">
    <h1 className="text-center text-3xl font-bold text-ww-text-bright">
      Forgot your password?
    </h1>
    <p className="mt-2 text-center text-sm text-ww-text-bright">Enter your email.</p>

    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
      <AuthField
        id="email"
        label="Email Address"
        type="email"
        placeholder="Email"
        autoComplete="email"
      />

      <button
        type="submit"
        className="w-full rounded-md bg-gradient-to-r from-[#5eb3ff] to-ww-accent py-3 text-sm font-bold text-white transition hover:brightness-110"
      >
        Reset Password
      </button>
    </form>
  </div>
);

export default ForgotPassword;
