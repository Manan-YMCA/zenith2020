/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { isMobile } from 'react-device-detect';

import { mediaSize } from '../site/siteTools';
import { Contact } from '../site/siteData';

/* --- Images --- */
import CaretIcon from '../static/img/faq/caret.png';

/* --- Styles --- */
const ComponentContainer = styled.div`
  position: relative;
  height: auto;
  padding: 2vw 0 3vw 0;

  color: #555657;
  transition: color 0.5s ease-in-out;

  ${mediaSize.tablet`
    &:hover {
      filter: brightness(20%);
    }
  `};
`;

const AccordionLabel = styled.div`
  cursor: pointer;
  height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & div.label-container {
    display: inline-flex;
    align-items: center;
    position: relative;
    vertical-align: top;
    height: 100%;
    max-width: 70vw;
  }

  & div.caret {
    display: none;
    position: relative;
    vertical-align: top;
    width: 1vw;
    height: 100%;

    ${mediaSize.tablet`
      width: 1.5vw;
      display: inline;
    `};

    ${mediaSize.phone`
      width: 2vw;
    `};

    & img {
      // Source: Caret Down by Wireform from the Noun Project
      max-width: 100%;
      max-height: 100%;

      transform: ${props => (props.selected ? 'rotate(180deg)' : 'rotate(0)')};
      transition: transform 0.25s ease-in-out;
    }
  }
`;

const AccordionContents = styled.div`
  transition: max-height 0.5s ease-in-out;

  max-height: 50vw;
  overflow: hidden;

  & div.contents {
    font-size: 1.3vw;
    font-weight: 400;

    ${mediaSize.tablet`
      font-size: 3vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }

  ${mediaSize.tablet`
    max-height: ${props => (props.selected ? '30vw' : '30vw')};
  `};

  ${mediaSize.phone`
    max-height: ${props => (props.selected ? '40vw' : '30vw')};
  `};
`;

/* --- Component ---

*/
class GenericAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <ComponentContainer
                className={`${this.props.className} ${
                    this.state.open ? 'selected' : ''
                    }`}
                show={this.state.open || this.props.open}
            >
                <AccordionLabel
                    onClick={() =>
                        this.setState(prevState => ({ open: !prevState.open }))
                    }
                    className="label"
                    selected={this.state.open}
                >
                    {' '}
                    {/* eslint-disable-line */}
                    <div className="label-container">{this.props.label}</div>
                   
                </AccordionLabel>
                <AccordionContents selected={this.state.open}>
                    <div className="contents">{this.props.children}</div>
                </AccordionContents>
            </ComponentContainer>
        );
    }
}

/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding: 10vh 0 0 0;
  width: 80vw;
  height: auto;
  margin: auto;

  color: ${props => props.theme.offBlack};

  ${mediaSize.tablet`
    width: 80vw;
  `};

  ${mediaSize.phone`
  `};
`;

const PageHeader = withReveal(
    styled.div`
    font-size: 2.5vw;
    font-weight: 500;
    color: ${props => props.theme.offBlack};
    position: relative;
    display: inline-block;

    ${'' /* &:after {
    color: black;
    mix-blend-mode: difference;
    content: '${props => props.title}';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  } */}

    ${mediaSize.tablet`
    font-size: 5vw;
    margin-bottom: 20px;
  `};

    ${mediaSize.phone`
    font-size: 7vw;
    margin-bottom: 30px;
  `};
  `,
    <Fade bottom />
);

const QandAContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: 45%;

    ${mediaSize.tablet`
      width: 100%;
    `};

    ${mediaSize.phone`
    `};
  }
`;

const FAQAccordion = styled(GenericAccordion)`
  width: 100%;

  & > div.label {
    font-size: 1.5vw;
    font-weight: 500;
    margin-bottom: 10px;

    ${mediaSize.tablet`
      font-size: 3.5vw;
    `};

    ${mediaSize.phone`
      font-size: 5vw;
    `};
  }

  & div.contents {
    font-size: 1.3vw;
    font-weight: 400;

    ${mediaSize.tablet`
      font-size: 2.5vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }
`;

const AdditionalQuestionsContainer = withReveal(
    styled.div`
    width: 40vw;
    margin: auto;
    text-align: center;

    color: ${props => props.theme.offBlack};

    & > div {
      font-weight: 500;
      padding-bottom: 5px;

      font-size: 1.5vw;

      ${mediaSize.tablet`
      font-size: 3.5vw;
    `};

      ${mediaSize.phone`
      font-size: 5vw;
    `};
    }

    & > a {
      color: ${props => props.theme.offBlack};
      font-size: 1.3vw;

      ${mediaSize.tablet`
      font-size: 2.5vw;
    `};

      ${mediaSize.phone`
      font-size: 4vw;
    `};
    }

    ${mediaSize.tablet`
    width: 60vw;
  `};

    ${mediaSize.phone`
    width: 80vw;
  `};
  `,
    <Fade bottom />
);

/* --- Component --- */
class FAQPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <PageContainer className="section" id="faq">
                <ContentContainer>
                    <PageHeader title={"Contact"}>
                        {"Contact"}
                    </PageHeader>
                    <QandAContainer>
                        <Fade bottom>
                            {Contact.numbers.map(qa => (
                                <FAQAccordion
                                    className="accordion question"
                                    label={qa.name}
                                    key={qa.question}
                                >
                                    <div className="contents">{qa.phone}</div>
                                </FAQAccordion>
                            ))}
                            <FAQAccordion
                                open={true}
                                className="accordion question"
                                label={"Email"}

                            >
                                <div className="contents">{Contact.email}</div>
                            </FAQAccordion>
                            <FAQAccordion
                                className="accordion question"
                                label={"Reach us at:"}

                            >
                                <div className="contents">{Contact.address}</div>
                            </FAQAccordion>
                        </Fade>
                    </QandAContainer>
                </ContentContainer>
            </PageContainer>
        );
    }
}

export default FAQPage;
