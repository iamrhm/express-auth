import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-size: 14px;
    border: none;
    *:focus {
      outline: none;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 400px;
  border: 0.5px solid #2d2d2d40;
  padding: 2% 4%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormControl = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormLabel = styled.p`
  width: 100%;
  text-align: left;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 2px 0;
  border-bottom: 0.5px solid #2d2d2d40;
  min-height: 24px;
`;

export const PasswordInput = styled(TextInput)``;

export const FormAction = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonInput = styled.button`
  width: 64px;
  padding: 2% 2%;
  border: 0.5px solid #2d2d2d40;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
`;

export const FormLink = styled.p`
  padding: 2% 2%;
`;
