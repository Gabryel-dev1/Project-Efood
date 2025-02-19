import styled from "styled-components";
import { breakpoints, cores } from "../../StylesGlobal";

type Props = {
  imagem: string;
};

export const ItalianBanner = styled.div<Props>`
  position: relative;
  height: 280px;
  font-size: 2rem;
  margin-bottom: 80px;
  font-weight: 900;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
    padding: 20px;
  }

  .container {
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;
    height: 100%;
    color: ${cores.branco};
    z-index: 1; 
  }

  span {
    font-weight: 100;
    margin-top: 24px;
    font-size: 32px;
  }

  h1 {
    margin-bottom: 32px;
    font-size: 32px; 
  }
`;
