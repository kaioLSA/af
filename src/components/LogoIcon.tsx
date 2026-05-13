interface LogoIconProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark';
}

const LogoIcon = ({ className, size = 50, variant = 'light' }: LogoIconProps) => {
  const afColor = variant === 'light' ? '#1a2744' : '#ffffff';
  const lineColor = '#c9a84c';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 60"
      width={size * 2.4}
      height={size}
      className={className}
    >
      <text
        x="5"
        y="50"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="55"
        fontWeight="bold"
        fill={afColor}
        letterSpacing="-9"
      >
        AF
      </text>
      <line x1="5" y1="56" x2="75" y2="56" stroke={lineColor} strokeWidth="2" />
    </svg>
  );
};

export default LogoIcon;
