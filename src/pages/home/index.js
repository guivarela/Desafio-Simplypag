import React, {useState, useEffect} from 'react';
import RangeSlider from '../../components/RangeSlider';
import CustomButton from '../../components/CustomButton';
import {round} from '../../helpers';

import { Container, Title, CardGroup, Card, List } from './styles';

export default function Home() {
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    console.log('qtd', qtd);
  }, [qtd])

  function handleOnChange(v) {
    setQtd(v);
  }

  return (
    <Container>
      <Title>De quanto você precisa?</Title>
      <Card>
        <p className="center">R$ {qtd.toString().replace(/\B(?=(\d{3})+\b)/g, ".")}</p>
        <RangeSlider 
          qtd={qtd}
          setQtd={setQtd}
        />
      </Card>
      <Card>
        <p className="center orange">Valor aproximado das parcelas:</p>
        <CardGroup>
          <Card rounded={true}>
            <p className="cyan">6x de</p>
            <p className="cyan">
              <strong>R$ {round(qtd/6)}</strong>
            </p>
          </Card>
          <Card rounded={true}>
            <p className="cyan">12x de</p>
            <p className="cyan">
              <strong>R$ {round(qtd/12)}</strong>
            </p>
          </Card>
          <Card rounded={true}>
            <p className="cyan">18x de</p>
            <p className="cyan">
              <strong>R$ {round(qtd/18)}</strong>
            </p>
          </Card>
        </CardGroup>
        <CustomButton 
          color="#ee731c"
          fontColor="white"
          href="https://www.simplypag.com.br/inscricao-empregador" 
          target="_blank"
          text="Eu quero!" />
      </Card>
      <Card>
        <p className="center cyan"><strong>Como funciona o empréstimo?</strong></p>
        <List>
          <li> Apenas para empregados domésticos (...)</li>
        </List>
      </Card>
    </Container>
  );
}
