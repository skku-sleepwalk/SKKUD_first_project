import style from "./ActionButton.module.css";

interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export function ActionButton({
  onClick,
  children,
  type = "button",
  className,
}: ActionButtonProps) {
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
