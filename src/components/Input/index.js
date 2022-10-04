import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input readOnly value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;
