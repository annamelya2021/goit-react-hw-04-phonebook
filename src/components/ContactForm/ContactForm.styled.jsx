import styled from '@emotion/styled';

export const Form = styled.form`
  display: block;
`;

export const Button = styled.button`
  padding: 3px 5px;
  cursor: pointer;
  background-color: darkgray;
  border-radius: 2px;
  width: auto;
  border: 1px solid gray;
  margin-top: 10px;
  margin-bottom: 20px;

  &active {
    background-color: rgba(18, 125, 212, 0.801);
    color: white;
  }
`;

export const Input = styled.input`
  padding: 2px;
  border-radius: 3px;
  border: 1px solid gray;
  display: block;
  margin: 0 auto;
  height: 25px;
  width: 160px;
`;

export const Label = styled.label`
  font-size: 20px;
`;
