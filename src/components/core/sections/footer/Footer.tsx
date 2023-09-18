import { BodyTextLight, BodyTextSmall } from 'components/core/typography/BodyText';
import { H3Title } from 'components/core/typography/Title';
import SearchLogo from 'components/SearchLogo';
import Form from 'components/ui/forms/Form';
import RSSIcon from 'components/ui/icons/RSSIcon';
import TwitterIcon from 'components/ui/icons/TwitterIcon';
import { MenuItems } from 'enums/menuItems';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BLUE, GREY_DARK, LIGHT_GREY, WHITE } from 'styles/color';
import { GREY_VERY_DARK } from 'styles/color';
import { SPACE_10, SPACE_20, SPACE_40 } from 'styles/spacing';

const FooterMain = styled.div`
  background: ${GREY_VERY_DARK};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  left: 0;
  padding: ${SPACE_40} 0 0;
  top: 0;
  -webkit-transform: translateZ(0);
  z-index: 100;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 1224px;
  padding: 0;
  > * {
    flex-basis: 33.3333%;
  }
  @media(max-width: 1029px) {
    flex-direction: column;
  }
`;

const FooterNavLiItem = styled.li<{ $isMobile?: boolean }>`
  list-style: none;
  text-decoration: none;
  position: relative;
  display: inline-block;
  &:not(:last-child) {
    content: none;
    &::before {
        content: '•';
        position: absolute;
        right: ${SPACE_10};
        color: ${BLUE};
      }
    }
`;

const FooterNavPageItem = styled(NavLink)`
    position: relative;
    margin: 0 ${SPACE_20} 0 0;
    text-decoration: none;
    color: ${WHITE};
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${BLUE};
    }
`;

const FooterNavContainer = styled.ul`
    padding-left: 0;
`;

const FooterMenu = styled.div`
    display: flex;
    margin: ${SPACE_20} 0;
    padding-top: ${SPACE_20};
    border-top: 1px solid ${GREY_DARK};
`;

const CopyrightFooter = styled.div`
    background-color: ${LIGHT_GREY};
    @media screen and (max-width: 1239px) {
        padding: 0 ${SPACE_20};
    }
`;

const CopyrightFooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1224px;
    padding: 0;
    > * {
        flex-basis: 33.3333%;
    }
`;

const CopyrightTextContainer = styled.div`
    text-align: center;
`;

const CopyrightFooterSocialMediaContainer = styled.div`
    text-align: right;
`;


const AboutFooterDescription = () => {

    return (
        <div>
            <H3Title $light={true}>About Us</H3Title>
            <BodyTextLight>Podcast transcripts and discussion</BodyTextLight>
        </div>
    )
};

const SubscribeForm = () => {

    return (
        <div>
        <H3Title $light={true}>Subscribe</H3Title>
        <BodyTextLight>Sign up to receive news about recently added podcasts. Just sign up and we'll send you notifications by email.</BodyTextLight>
            <Form 
                inputs={[
                {
                    type: 'text',
                    settings: {
                    name: 'name',
                    placeholder: 'Your Name',
                    }
                },
                {
                    type: 'text',
                    settings: {
                    name: 'email',
                    placeholder: 'Your Email',
                    }
                },
                {
                    type: 'submit',
                    settings: {
                    label: 'Subscribe',
                    backgroundColor: BLUE,
                    icon: <RSSIcon height={15} width={15} fill={WHITE} />,
                    reverse: true,
                    fullWidth: true,
                    }
                }
                ]}
            />
            <FooterMenu>
                <FooterNavContainer>
                    {Object.values(MenuItems)
                        .filter(item => item.label !== 'Podcasts')
                        .map((item) => {
                            return (
                                <FooterNavLiItem key={item.label} style={{ textDecoration: 'none' }}>
                                    <FooterNavPageItem to={item.url}>
                                        {item.label}
                                    </FooterNavPageItem>
                                </FooterNavLiItem>
                            );
                    })}
                </FooterNavContainer>
            </FooterMenu>
        </div>
    )
};

const Footer = () => {

    return (
        <FooterMain>
            <FooterContainer>
                <AboutFooterDescription />
                <></>
                <SubscribeForm />
            </FooterContainer>
            <CopyrightFooter>
                <CopyrightFooterInner>
                    <SearchLogo footer={true} />
                    <CopyrightTextContainer>
                        <BodyTextSmall>
                            © PodScripts.co - Podcast transcripts and discussion .
                        </BodyTextSmall>
                    </CopyrightTextContainer>
                    <CopyrightFooterSocialMediaContainer>
                        <TwitterIcon height={15} width={15} fill={BLUE} />
                    </CopyrightFooterSocialMediaContainer>
                </CopyrightFooterInner>
            </CopyrightFooter>
        </FooterMain>
    )
}

export default Footer;