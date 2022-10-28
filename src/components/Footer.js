import styled from "styled-components";

const Footer = () => {
    return (
        <FooterBlock>
            <span>개인정보 처리방침</span>
            <span>서비스 약관</span>
            <span>©2022 NagaBang, Inc. All Rights Reserved.</span>
            <span className="span_nagabang">NagaBang</span>
        </FooterBlock>
    )
}
const FooterBlock = styled.div`
    border-top: 1px solid #40BAAA;
    width: 1024px;
    height: auto;
    padding: 10px 10px;
    font-size: 0.8em;

    & > span {
    margin: 10px;
    }

    .span_nagabang{
    font-size: 2em;
    position: relative;
    left: 360px;
    color: #ED77BC;
}
`;

export default Footer;