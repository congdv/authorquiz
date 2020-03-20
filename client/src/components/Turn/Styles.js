import styled from 'styled-components';

export const CardTurn =  styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.color};
`;

export const AuthorImg = styled.div`{
  height: 400px;
  img {
    max-height: 100%;
  }
}`;