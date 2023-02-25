/* Write your CSS here */
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PrimeImage = styled.img`
  width: 100%;
`
export const MoviesContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`
export const MoviesHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.3;
  margin-top: 32px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
