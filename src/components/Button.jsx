import React from 'react';

/**
 * Reusable Button Component
 * 
 * @param {string} text - Text to display (e.g. "Red", "Submit")
 * @param {React.ReactNode} children - Alternative to text: <Button>Click me</Button>
 * @param {function} onClick - Function called when clicked
 * @param {string} bgColor - Optional custom background color (hex, name, or tailwind color)
 * @param {string} className - Optional additional Tailwind classes
 */
function Button({
  text,
  children,
  onClick,
  bgColor,
  className = '',
  ...props
}) {
  const content = children || text || 'Click Me';

  return (
    <button
      type="button"
      onClick={onClick}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      className={`px-5 py-2.5 rounded-full font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 cursor-pointer bg-blue-600 ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
