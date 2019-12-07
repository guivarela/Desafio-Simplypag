import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: #f0f2ec;
  height: calc(100vh - 80px);
  overflow-y: scroll;

  .rangeslider {
    &.rangeslider-horizontal {

      &.active {
        .rangeslider__fill,
        .rangeslider__handle {
          background-color: #3ab9a9!important;
        }
      }
      .rangeslider__fill{
        transition: background-color .3s;
        background-color: #219e8e!important;
      }
      .rangeslider__handle {
        box-shadow: -1px 0px 4px 0px rgba(58, 58, 58, 0.4);
        background-color: #219e8e;
        border: none;
        cursor: pointer;
        &:after {
          content: none;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-family: 'OpenSansBold';
  color: #219e8e;
  text-align: center;
  max-width: 300px;
  margin: 20px auto 20px;
`;
export const CardGroup = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
  max-width: 450px;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 20px 15px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.43);
  margin: 10px 0px;
  
  border-radius: ${props => props.rounded ? "10px" : "0px"};
  width: ${props => props.rounded ? "100px" : "100%"};
  text-align: ${props => props.rounded ? "center" : "auto"};

  p {
    color: #333;
    font-size: 18px;
  }

  span {
    font-size: 18px;
    color: #219e8e;
  }
  
  strong {
    font-family: 'OpenSansBold';
  }

  .center {
    text-align: center;
  }
`;

export const List = styled.ul`
  padding: 0px 30px;
  margin: 20px 0px;
  li {
    list-style: initial;
  }
`;