import {Component} from 'react'

import {
  BgContainer,
  DetailedContainer,
  Heading,
  InputCard,
  LabelElement,
  InputElement,
  GenerateBtn,
  SelectElement,
  OptionElement,
  MemeContainer,
  TextElement,
  FormElement,
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
    imgUrl: '',
    topText: '',
    bottomText: '',
    optionId: fontSizesOptionsList[0].optionId,
  }

  onSubmitMemeDetails = event => {
    event.preventDefault()
  }

  updateImage = event => {
    this.setState({imgUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  updateFontSize = event => {
    this.setState({optionId: event.target.value})
  }

  generateMeme = () => {
    const {optionId, topText, bottomText, imgUrl} = this.state

    return (
      <MemeContainer bgImg={imgUrl} data-testid="meme">
        <TextElement activeFontSize={optionId}>{topText}</TextElement>
        <TextElement activeFontSize={optionId}>{bottomText}</TextElement>
      </MemeContainer>
    )
  }

  render() {
    const {imgUrl, topText, bottomText, optionId} = this.state

    return (
      <BgContainer>
        <DetailedContainer>
          {this.generateMeme()}
          <FormElement onClick={this.onSubmitMemeDetails}>
            <Heading>Meme Generator</Heading>
            <InputCard>
              <LabelElement htmlFor="urlInput">Image URL</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter the Image URL"
                id="urlInput"
                onChange={this.updateImage}
                value={imgUrl}
              />
            </InputCard>

            <InputCard>
              <LabelElement htmlFor="textInput">Top Text</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter the Top Text"
                id="textInput"
                onChange={this.updateTopText}
                value={topText}
              />
            </InputCard>

            <InputCard>
              <LabelElement htmlFor="bottomInput">Bottom Text</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter the Bottom Text"
                id="bottomInput"
                onChange={this.updateBottomText}
                value={bottomText}
              />
            </InputCard>

            <InputCard>
              <LabelElement htmlFor="bottomInput">Font Size</LabelElement>
              <SelectElement
                id="optionId"
                value={optionId}
                onChange={this.updateFontSize}
              >
                {fontSizesOptionsList.map(eachItem => (
                  <OptionElement
                    key={eachItem.optionId}
                    value={eachItem.displayText}
                    name="fontSizes"
                  >
                    {eachItem.displayText}
                  </OptionElement>
                ))}
              </SelectElement>
            </InputCard>

            <GenerateBtn type="submit">Generate</GenerateBtn>
          </FormElement>
        </DetailedContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator
