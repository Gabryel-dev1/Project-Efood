import styled from "styled-components";
import { breakpoints, cores } from "../../StylesGlobal";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  justify-content: flex-end;

  &.address-is-open {
    display: flex;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 700;
    color: ${cores.bege};
  }

  .payment-button {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .has-error {
    color: red;
    border: 3px solid red;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.bege};
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    margin-bottom: 8px;

    font-weight: bold;
    color: black;

    border: 2px solid ${cores.bege};
    background-color: ${cores.bege};
  }

  &.mid-size {
    display: flex;
    flex-direction: row;

    div {
      margin-right: 34px;

      input {
        width: 155px;
        margin-top: 8px;

        @media (max-width: ${breakpoints.tablet}) {
          width: 124px;
        }
      }
    }
  }
`;
