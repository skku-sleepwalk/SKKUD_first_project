import style from "./UnstyledButton.module.css";

interface UnstylesButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export function UnstylesButton({
  onClick,
  children,
  type = "button",
  className,
}: UnstylesButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style.button} ${className}`}
    >
      {children}
    </button>
  );
}
