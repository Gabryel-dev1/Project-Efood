import styled from "styled-components";
import { breakpoints } from "../../StylesGlobal";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 80px;
  margin-bottom: 120px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0 16px;
    margin-top: 60px; 
    margin-bottom: 80px; 
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 12px;
    margin-top: 40px;  
    margin-bottom: 60px;
  }
`;
