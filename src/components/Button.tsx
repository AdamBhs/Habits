import "./styleComponents.css";

interface ButtonProps {
    onClick: () => void; 
    name: string;        
}

export default function Button({onClick, name}: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
        + {name}
    </button>
  )
}
