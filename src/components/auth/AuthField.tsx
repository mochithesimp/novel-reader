interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
}

const AuthField = ({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
}: Props) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm text-ww-text-bright">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full rounded-md border border-ww-border bg-ww-panel px-4 py-3 text-sm text-ww-text-bright outline-none transition placeholder:text-ww-text-dim focus:border-ww-accent"
    />
  </div>
);

export default AuthField;
