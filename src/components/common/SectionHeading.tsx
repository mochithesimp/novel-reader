interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-ww-text-bright md:text-[28px]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-1 text-sm text-ww-text-dim md:text-base">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
