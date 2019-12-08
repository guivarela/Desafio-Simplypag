import styled from 'styled-components';

export const Button = styled.a`
  font-family: 'OpenSansBold';
  font-size: 18px;
  display: block;
  padding: 10px 20px;
  margin: auto;
  border-radius: 50px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  color: ${props => props.fontColor ? props.fontColor : 'black'};
  background-color: ${props => props.color ? props.color : 'white'};
  width: ${props => props.width ? props.width : '180px'};
`;
