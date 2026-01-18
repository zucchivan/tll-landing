export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG recreation of the swoosh logo */}
      <svg viewBox="0 0 60 50" className="h-10 w-12 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top swoosh with circles */}
        <path
          d="M12 18C12 18 8 16 6 12C4 8 6 4 12 4C18 4 50 8 54 20C56 26 52 28 52 28"
          stroke="#ad004a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="10" cy="22" r="4" stroke="#ad004a" strokeWidth="2.5" fill="none" />
        <circle cx="6" cy="14" r="3" stroke="#ad004a" strokeWidth="2" fill="none" />

        {/* Bottom swoosh with circles */}
        <path
          d="M48 32C48 32 52 34 54 38C56 42 54 46 48 46C42 46 10 42 6 30C4 24 8 22 8 22"
          stroke="#ad004a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="50" cy="28" r="4" stroke="#ad004a" strokeWidth="2.5" fill="none" />
        <circle cx="54" cy="36" r="3" stroke="#ad004a" strokeWidth="2" fill="none" />
      </svg>

      {/* Text logo */}
      <span className="text-xl font-extrabold tracking-tight text-primary whitespace-nowrap">THE LANGUAGE LINK</span>
    </div>
  )
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={`h-8 w-10 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top swoosh with circles */}
      <path
        d="M12 18C12 18 8 16 6 12C4 8 6 4 12 4C18 4 50 8 54 20C56 26 52 28 52 28"
        stroke="#ad004a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="10" cy="22" r="4" stroke="#ad004a" strokeWidth="2.5" fill="none" />
      <circle cx="6" cy="14" r="3" stroke="#ad004a" strokeWidth="2" fill="none" />

      {/* Bottom swoosh with circles */}
      <path
        d="M48 32C48 32 52 34 54 38C56 42 54 46 48 46C42 46 10 42 6 30C4 24 8 22 8 22"
        stroke="#ad004a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="28" r="4" stroke="#ad004a" strokeWidth="2.5" fill="none" />
      <circle cx="54" cy="36" r="3" stroke="#ad004a" strokeWidth="2" fill="none" />
    </svg>
  )
}
