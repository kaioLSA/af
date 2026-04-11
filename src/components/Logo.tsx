interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'light' | 'dark';
}

const Logo = ({ className, width = 280, height = 200, variant = 'light' }: LogoProps) => {
  const skylineColor = variant === 'light' ? '#1a2744' : '#c9a84c';
  const afColor = variant === 'light' ? '#1a2744' : '#ffffff';
  const textColor = variant === 'light' ? '#1a2744' : '#ffffff';
  const lineColor = variant === 'light' ? '#c9a84c' : '#c9a84c';
  const subTextColor = variant === 'light' ? '#555555' : '#cccccc';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 400"
      width={width}
      height={height}
      className={className}
    >
      {/* Skyline */}
      <polyline
        points="30,160 30,130 50,130 50,100 65,100 65,80 80,80 80,60 95,60 95,80 110,80 110,55 125,55 125,80 140,80 140,100 155,100 155,70 170,70 170,50 185,50 185,70 200,70 200,90 215,90 215,60 230,60 230,40 245,40 245,60 260,60 260,80 275,80 275,55 290,55 290,70 305,70 305,90 320,90 320,70 335,70 335,50 350,50 350,70 365,70 365,100 380,100 380,80 395,80 395,60 410,60 410,80 425,80 425,110 440,110 440,130 455,130 455,160 470,160"
        fill="none"
        stroke={skylineColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* AF Letters */}
      <text
        x="120"
        y="260"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="120"
        fontWeight="bold"
        fill={afColor}
        letterSpacing="-5"
      >
        AF
      </text>

      {/* Horizontal line under AF */}
      <line x1="115" y1="275" x2="290" y2="275" stroke={lineColor} strokeWidth="2" />

      {/* ENGENHARIA & PROJETOS */}
      <text
        x="295"
        y="230"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="28"
        fontWeight="300"
        fill={textColor}
        letterSpacing="3"
      >
        ENGENHARIA
      </text>
      <text
        x="295"
        y="265"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="28"
        fontWeight="300"
        fill={textColor}
        letterSpacing="3"
      >
        & PROJETOS
      </text>

      {/* Responsável Técnico */}
      <text
        x="250"
        y="320"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="16"
        fill={subTextColor}
        textAnchor="middle"
        letterSpacing="2"
      >
        Responsável Técnico
      </text>

      {/* Fagner Cruz */}
      <text
        x="250"
        y="355"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="28"
        fontStyle="italic"
        fill={lineColor}
        textAnchor="middle"
      >
        Fagner Cruz
      </text>
    </svg>
  );
};

export default Logo;
