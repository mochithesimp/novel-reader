const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26a5.52 5.52 0 0 1-3.04.88c-2.34 0-4.32-1.58-5.03-3.71H.96v2.33A9 9 0 0 0 9 18z"
    />
    <path
      fill="#FBBC05"
      d="M3.97 10.73A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.29-1.73V4.94H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.06l3.01-2.33z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.96 8.96 0 0 0 9 0 9 9 0 0 0 .96 4.94l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.02 10.125 24v-8.385H7.078v-3.54h3.047V9.41c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.54h-2.796V24C19.612 23.02 24 18.1 24 12.073z" />
  </svg>
);

const SocialLoginButtons = () => (
  <div className="space-y-3">
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-md border border-ww-border bg-white py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
    >
      <GoogleIcon />
      Continue with Google
    </button>

    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1877f2] py-3 text-sm font-semibold text-white transition hover:brightness-110"
    >
      <FacebookIcon />
      Continue with Facebook
    </button>
  </div>
);

export default SocialLoginButtons;
