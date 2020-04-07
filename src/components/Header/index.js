import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/fastfeet-logo.svg';

import { Container, Content, User } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="FastFeet" />

                    <Link to="/Deliveries">ENCOMENDAS</Link>
                    <Link to="/DeliveryMen">ENTREGADORES</Link>
                    <Link to="/Recipients">DESTINATÁRIOS</Link>
                    <Link to="/DeliveriesProblems">PROBLEMAS</Link>
                </nav>

                <aside>
                    <User>
                        <strong>USUARIO</strong>
                    </User>
                    <Link to="/logoff">sair do sistema</Link>
                </aside>
            </Content>
        </Container>
    );
}
