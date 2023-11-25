import { ButtonBox, ButtonLoad } from './ButtonLoad.styled';

export const Button = ({ onClick, btnText }) => {
  return (
    <ButtonBox>
      <ButtonLoad onClick={onClick} type="button">
        {btnText}
      </ButtonLoad>
    </ButtonBox>
  );
};
