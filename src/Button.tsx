import "./Button.css";

type ButtonProps = {
  title: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, handleClick }) => {
  return (
    <>
      <button className="fancy-button" onClick={handleClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
