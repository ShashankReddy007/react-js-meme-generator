import {Component} from 'react'
import {
  PageContainer,
  FormContainer,
  UrlLabel,
  UrlInput,
  SelectFont,
  CustomOption,
  CustomButton,
  ImageContainer,
  TopText,
  BottomText,
  Heading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
  }

  submitForm = event => {
    event.preventDefault()
    const {url, topText, bottomText, fontSize} = this.state

    this.setState({
      url,
      topText,
      bottomText,
      fontSize,
    })
  }

  render() {
    const {url, topText, bottomText, fontSize} = this.state
    return (
      <PageContainer>
        <FormContainer onSubmit={this.submitForm}>
          <Heading>Meme Generator</Heading>
          <UrlLabel htmlFor="url">Image Url</UrlLabel>
          <UrlInput
            placeholder="Enter the Image Url"
            id="url"
            value={url}
            onChange={e => this.setState({url: e.target.value})}
          />

          <UrlLabel htmlFor="url">Top Text</UrlLabel>
          <UrlInput
            placeholder="Enter the Top Text"
            id="url"
            value={topText}
            onChange={e => this.setState({topText: e.target.value})}
          />

          <UrlLabel htmlFor="url">Bottom Text</UrlLabel>
          <UrlInput
            placeholder="Enter the Bottom Text"
            id="url"
            value={bottomText}
            onChange={e => this.setState({bottomText: e.target.value})}
          />

          <UrlLabel htmlFor="url">Font Size</UrlLabel>

          <SelectFont
            onChange={e => this.setState({fontSize: e.target.value})}
            value={fontSize}
          >
            {fontSizesOptionsList.map(item => (
              <CustomOption key={item.optionId} value={item.displayText}>
                {item.displayText}
              </CustomOption>
            ))}
          </SelectFont>
          <CustomButton type="submit">Generate</CustomButton>
        </FormContainer>
        <ImageContainer bg={url}>
          <TopText fontSize={fontSize}>{topText}</TopText>
          <BottomText fontSize={fontSize}>{bottomText}</BottomText>
        </ImageContainer>
      </PageContainer>
    )
  }
}

export default MemeGenerator
