import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DetailedContainer = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const FormElement = styled.form`
  order: 2;
  @media (min-width: 768px) {
    order: 1;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Open Sans';
  @media (min-width: 768px) {
    font-size: 44px;
  }
`

export const InputCard = styled.div`
  margin-bottom: 18px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #5a7184;
  border-radius: 3px;
  margin-top: 10px;
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const GenerateBtn = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  width: 120px;
  padding: 10px 0px;
  border-width: 0px;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Open Sans';
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const SelectElement = styled.select`
  width: 100%;
  color: #1e293b;
  font-size: 14px;
  font-family: 'Open Sans';
  position: relative;
  margin-top: 10px;
  padding: 10px 0px;
  outline: none;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const OptionElement = styled.option`
  color: #1e293b;
  font-size: 14px;
  font-family: 'Open Sans';
  padding: 10px 0px;
  position:position: absolute;
  top:100%;
  bottom:0px;
  :hover {
    background-color: #0b69ff;
    color: #d7dfe9;
  }
   @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const MemeContainer = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${props => props.bgImg});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  order: 1;
  @media (min-width: 768px) {
    width: 45%;
    margin: 15px 0px;
    height: 300px;
    order: 2;
  }
`
export const TextElement = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSize}px;
  font-family: 'Open Sans';
`
