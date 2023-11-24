export const Button = ({ onClick, btnText }) => {
  return (
    <button onClick={onClick} type="button">
      {btnText}
    </button>
  );
};
