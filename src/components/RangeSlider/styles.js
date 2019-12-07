import styled from 'styled-components';

export const Container = styled.div`
  .rangeslider {
    &.rangeslider-horizontal {
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.36);

      &.active {
        .rangeslider__fill {
          animation: colorCycle 4s infinite;

        }
        .rangeslider__fill,
        .rangeslider__handle {
          background-color: #3ab9a9!important;
        }
      }
      .rangeslider__fill{
        transition: background-color .3s;
        background-color: #219e8e!important;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.36);
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

  @keyframes colorCycle {
    0%{
      background-color: #5ab7ab;
    }
    50%{
      background-color: #219e8e;
    }
    100%{
      background-color: #5ab7ab;
    }
  }
`;