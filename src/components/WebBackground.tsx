export default function WebBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial web pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="webFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(0 80% 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(0 80% 50%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Concentric circles */}
        {[100, 180, 260, 340, 420, 500, 600].map((r, i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={r}
            fill="none"
            stroke="hsl(0 80% 50%)"
            strokeWidth="0.5"
            opacity={0.3 - i * 0.03}
          />
        ))}

        {/* Radial lines */}
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i * 360) / 16
          const rad = (angle * Math.PI) / 180
          const x2 = 50 + Math.cos(rad) * 80
          const y2 = 50 + Math.sin(rad) * 80
          return (
            <line
              key={`line-${i}`}
              x1="50%"
              y1="50%"
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="hsl(0 80% 50%)"
              strokeWidth="0.5"
              opacity={0.2}
            />
          )
        })}
      </svg>

      {/* Animated glow orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-glow-pulse"
        style={{
          top: '-200px',
          right: '-200px',
          background: 'radial-gradient(circle, hsl(0 80% 50% / 0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-glow-pulse"
        style={{
          bottom: '-150px',
          left: '-150px',
          background: 'radial-gradient(circle, hsl(220 80% 35% / 0.06) 0%, transparent 70%)',
          animationDelay: '1.5s',
        }}
      />
    </div>
  )
}
