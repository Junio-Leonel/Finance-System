import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onNewTransactionModal: () => void;
}

export function Header({ onNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Finance System" />
        <button type="button" onClick={onNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
