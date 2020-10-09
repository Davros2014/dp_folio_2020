import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: red;
  @media (max-width: 1000px) {
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 1000px) {
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  @media (max-width: 1000px) {
  }
`;
