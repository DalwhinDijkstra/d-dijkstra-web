/** Logo gradient bar - matches the brand identity */
export default function GradientBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-1.5 rounded-full ${className}`}
      style={{
        background: "linear-gradient(180deg, #00B4D8 0%, #38B249 50%, #B5D63D 100%)",
      }}
    />
  );
}
