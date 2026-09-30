import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// 1. Official Flutter Logo (Google Flutter bird-wing geometry)
export const FlutterLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 166 202" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100.7 0L0 100.7l31.3 31.3L163.3 0H100.7z" fill="#47C5FB" />
    <path d="M100.7 101.4L44.8 157.3l31.3 31.3 24.6-24.6 62.6-62.6H100.7z" fill="#47C5FB" />
    <path d="M76.1 188.6l24.6 24.6h62.6l-55.9-55.9-31.3 31.3z" fill="#00569E" />
    <path d="M44.8 157.3l31.3-31.3 31.3 31.3-31.3 31.3-31.3-31.3z" fill="#00B5F8" />
  </svg>
);

// 2. Official FastAPI Logo (Teal circle with white lightning)
export const FastAPILogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="64" cy="64" r="64" fill="#009688" />
    <path 
      d="M72.2 18.5L34.1 66.8h25.4L48.8 109.5l45.1-51.5H68.6l15.3-39.5H72.2z" 
      fill="#ffffff" 
    />
  </svg>
);

// 3. Official Python Logo (Dual blue & yellow snakes)
export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M63.4 8.2c-29.2 0-27.4 12.7-27.4 12.7l.03 13.1h27.9v3.9H24.3S8.2 36.1 8.2 65.3c0 29.2 14.1 28.2 14.1 28.2h8.4v-11.8s-.5-14.1 13.8-14.1h23.8s13.3.2 13.3-13.1V21.8s1.6-13.6-28.2-13.6zm-15.5 8.7c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8z" 
      fill="#3776AB" 
    />
    <path 
      d="M64.6 119.8c29.2 0 27.4-12.7 27.4-12.7l-.03-13.1H64.1V90.1h39.6s16.1 1.8 16.1-27.4c0-29.2-14.1-28.2-14.1-28.2h-8.4v11.8s.5 14.1-13.8 14.1H79.7s-13.3-.2-13.3 13.1v32.7s-1.6 13.6 28.2 13.6zm15.5-8.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8z" 
      fill="#FFD438" 
    />
  </svg>
);

// 4. Official PostgreSQL Logo (Elephant "Slonik")
export const PostgreSQLLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M63.8 12c-29.3 0-48.4 20.8-48.4 48.2 0 18.9 9.3 35.1 23.3 43.1 1.2-2.8 2.8-6.1 4.8-9.6-6.1-3.6-11.8-9.3-15.1-17.2 4.1 2.3 8.8 4.2 13.8 5.4-1.2-4.1-1.7-8.7-1.7-13.6 0-14.6 5.8-27.4 15-36 1.8 4.6 4.3 9.4 7.6 14.3-1.6 3.6-2.6 7.6-2.6 11.9 0 14.4 10.4 26.2 23.5 26.8 5.7 8.2 11.8 15.3 17.5 20.7 8.9-6.3 14.9-17 14.9-29.1C114 43.1 91.5 12 63.8 12z" 
      fill="#336791" 
    />
    <path 
      d="M74.8 77.2c-7.2-.6-12.8-7.2-12.8-15.2 0-2.4.5-4.6 1.4-6.6 4.9 6.8 11.2 13.7 18.2 19.9-2.2 1.3-4.5 1.9-6.8 1.9z" 
      fill="#4F89BC" 
    />
    <circle cx="82.4" cy="47.2" r="4.2" fill="#ffffff" />
    <circle cx="82.4" cy="47.2" r="2.1" fill="#336791" />
  </svg>
);

// 5. Official Docker Logo (Whale with shipping container blocks)
export const DockerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M124.6 61.2c-3.1-2.2-10-1.8-13.5-.8-1.5-7.8-6.9-12.7-14.3-13.9l-2.4-.4-.9 2.2c-3.8 9.3-1.3 18.2 4.4 24.3-3.6 2-8.3 3.1-13.9 3.1H8.7c-2.4 9.8 1.6 19.8 8.6 26.2 9.8 9 24.4 12.2 43.1 12.2 38.6 0 66.8-19.1 72.8-44.6 2.4-1.2 5.9-4.2 6.8-6.1l.6-1.5-6-7.8z" 
      fill="#2496ED" 
    />
    {/* Shipping container cubes */}
    <rect x="23.4" y="52.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="36.6" y="52.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="49.8" y="52.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="63" y="52.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="36.6" y="40.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="49.8" y="40.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="63" y="40.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="49.8" y="28.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <rect x="63" y="28.2" width="10.8" height="9.6" rx="1" fill="#2496ED" />
    <circle cx="103.5" cy="67.5" r="2.5" fill="#ffffff" />
  </svg>
);

// 6. Official Git Logo (Orange diamond with branching nodes)
export const GitLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M125.2 57.6L70.4 2.8c-3.7-3.7-9.8-3.7-13.6 0L44 15.6l17.2 17.2c3.9-1.3 8.6-.4 11.7 2.7 3.2 3.2 4 7.9 2.6 11.9l16.6 16.6c4-1.4 8.7-.6 11.9 2.6 4.4 4.4 4.4 11.6 0 16-4.4 4.4-11.6 4.4-16 0-3.3-3.3-4.1-8.2-2.5-12.3L72.2 55v31.7c1.1.7 2.1 1.7 2.9 2.6 4.4 4.4 4.4 11.6 0 16-4.4 4.4-11.6 4.4-16 0-4.4-4.4-4.4-11.6 0-16 .9-.9 2-1.8 3.1-2.4V54.4c-1.1-.6-2.1-1.5-3.1-2.4-3.3-3.3-4.1-8.2-2.5-12.3L39.3 22.4 2.8 58.9c-3.7 3.7-3.7 9.8 0 13.6l54.8 54.8c3.7 3.7 9.8 3.7 13.6 0l54-54.1c3.7-3.7 3.7-9.8 0-13.6z" 
      fill="#F05032" 
    />
  </svg>
);

// 7. Official GitHub Logo (Octocat silhouette)
export const GitHubLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className} 
    style={size ? { width: size, height: size } : undefined} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M64 0C28.65 0 0 28.65 0 64c0 28.28 18.34 52.28 43.78 60.72 3.2.59 4.37-1.39 4.37-3.08 0-1.52-.06-5.56-.09-10.91-17.8 3.87-21.56-8.58-21.56-8.58-2.91-7.4-7.11-9.37-7.11-9.37-5.81-3.97.44-3.89.44-3.89 6.42.45 9.8 6.59 9.8 6.59 5.71 9.78 14.98 6.96 18.63 5.32.58-4.14 2.24-6.96 4.07-8.56-14.21-1.62-29.15-7.1-29.15-31.62 0-6.98 2.49-12.69 6.58-17.16-.66-1.62-2.85-8.12.62-16.92 0 0 5.37-1.72 17.6 6.56 5.1-1.42 10.57-2.13 16-2.15 5.43.02 10.9 0.73 16 2.15 12.22-8.28 17.58-6.56 17.58-6.56 3.48 8.8 1.29 15.3.63 16.92 4.1 4.47 6.57 10.18 6.57 17.16 0 24.59-14.97 29.98-29.22 31.56 2.3 1.98 4.35 5.89 4.35 11.87 0 8.57-.08 15.48-.08 17.58 0 1.71 1.15 3.71 4.4 3.08C109.68 116.25 128 92.26 128 64c0-35.35-28.65-64-64-64z" 
    />
  </svg>
);

// Combined Git + GitHub Brand Mark
export const GitAndGitHubLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <div className={`flex items-center gap-1.5 ${className}`} style={size ? { width: size * 2.2, height: size } : undefined}>
    <GitLogo size={size ? size : 20} className="w-5 h-5 shrink-0" />
    <span className="text-slate-400 font-bold text-xs">+</span>
    <GitHubLogo size={size ? size : 20} className="w-5 h-5 shrink-0 text-slate-900" />
  </div>
);
