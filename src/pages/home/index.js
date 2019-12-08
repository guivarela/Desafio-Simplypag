import React, {useState, useEffect} from 'react';
import RangeSlider from '../../components/RangeSlider';
import CustomButton from '../../components/CustomButton';
import {round} from '../../helpers';

import { Container, Title, Subtitle, CardGroup, Card, List } from './styles';

export default function Home() {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log('Valor', valor);
  }, [valor])

  return (
    <Container>
      <Subtitle className="orange"><strong>empréstimo pessoal para<br/> empregadas domésticas</strong></Subtitle>
      <Title className="cyan">De quanto você precisa?</Title>
      <Card>
        <p className="center">R$ {valor.toString().replace(/\B(?=(\d{3})+\b)/g, ".")}</p>
        <RangeSlider 
          valor={valor}
          setValor={setValor}
        />
      </Card>
      <Card>
        <p className="center orange"><strong>Valor aproximado das parcelas:</strong></p>
        <CardGroup>
          <Card rounded={true}>
            <p className="cyan">6x de</p>
            <p className="cyan">
              <strong>R$ {round(valor/6)}</strong>
            </p>
          </Card>
          <Card rounded={true}>
            <p className="cyan">12x de</p>
            <p className="cyan">
              <strong>R$ {round(valor/12)}</strong>
            </p>
          </Card>
          <Card rounded={true}>
            <p className="cyan">18x de</p>
            <p className="cyan">
              <strong>R$ {round(valor/18)}</strong>
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
