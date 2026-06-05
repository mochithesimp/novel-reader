interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const ToggleSwitch = ({ checked, onChange, label }: Props) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={() => onChange(!checked)}
    className={`relative h-7 w-12 shrink-0 rounded-full transition ${
      checked ? "bg-ww-accent" : "bg-ww-toggle-track"
    }`}
  >
    <span
      className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-all duration-200 ${
        checked ? "left-[calc(100%-1.625rem)]" : "left-0.5"
      }`}
    />
  </button>
);

export default ToggleSwitch;
