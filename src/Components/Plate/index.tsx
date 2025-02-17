import * as S from "./styles";

type Props = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
  onclick: (id: number) => void; // Passar o id para o onclick
};

const Plate = ({ id, foto, nome, descricao, onclick }: Props) => {
  const retornaDescricaoPrato = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 120) + "...";
    }
    return descricao;
  };

  return (
    <S.Container>
      <img src={foto} alt={nome} />
      <h2>{nome}</h2>
      <p>{retornaDescricaoPrato(descricao)}</p>
      <S.Button onClick={() => onclick(id)}>Mais detalhes</S.Button> {/* Passando o id no onclick */}
    </S.Container>
  );
};

export default Plate;
