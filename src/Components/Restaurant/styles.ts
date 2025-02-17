import styled from "styled-components";
import { breakpoints, cores } from "../../StylesGlobal";
import { Link } from "react-router-dom";

type Props = {
  destaque?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 20px;
  height: 398px;
  font-weight: 700;
  border: 1px solid ${cores.vermelho};
  color: ${cores.vermelho};
  background-color: ${cores.branco};

  @media (max-width: ${breakpoints.desktop}) {
    width: 372px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 340px;
  }
`;

export const Imagem = styled.img`
  height: 217px;
  object-fit: cover;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  h2 {
    font-size: 18px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 8px;
  }
`;

export const Info = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const Button = styled(Link)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  width: 96px;
  height: 32px;
  border-radius: 10px;
  margin-left: 8px;
  margin-top: 8px;
  color: ${cores.branco};
  background-color: ${cores.vermelho};
`;

export const TagContainer = styled.div<Props>`
  display: flex;
  position: absolute;
  top: 16px;
  right: ${(props) => (props.destaque ? "20px" : "30px")};
  gap: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    right: ${(props) => (props.destaque ? "11px" : "20px")};
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  height: 14px;
  padding: 12px 12px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  color: ${cores.branco};
  background-color: ${cores.vermelho};
`;
