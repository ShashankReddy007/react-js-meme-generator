// Style your components here
import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`

export const Heading = styled.h1``
export const UrlLabel = styled.label``
export const UrlInput = styled.input``
export const SelectFont = styled.select``
export const CustomOption = styled.option``
export const CustomButton = styled.button`
  width: 200px;
  margin-top: 10px;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  height: 60vh;
  min-width: 60vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ImageCard = styled.img``
export const TopText = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: white;
`
export const BottomText = styled.h1`
  font-size: ${props => props.fontSize}px;
  color: white;
`
