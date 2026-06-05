import ToggleSwitch from "../common/ToggleSwitch";

interface Props {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ProfileSettingRow = ({ label, description, checked, onChange }: Props) => (
  <div className="flex items-start justify-between gap-6 py-5">
    <div className="min-w-0">
      <p className="font-semibold text-ww-text-bright">{label}</p>
      {description && (
        <p className="mt-1 text-sm leading-relaxed text-ww-text-dim">{description}</p>
      )}
    </div>
    <ToggleSwitch checked={checked} onChange={onChange} label={label} />
  </div>
);

export default ProfileSettingRow;
