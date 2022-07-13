import styled from 'styled-components';

export const LandingContainer = styled.div`
    background: #2F3061;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const FullStackBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    /* -o-object-fit: cover; */
    object-fit: cover;
    z-index: 2;
    
`;

export const FullStackContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FsH1 = styled.h1`
    color: #FFF;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }    

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const FsH2 = styled.h2`
    color: #fff;
    font-size: 38px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 34px;
    }    

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const FsP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }`

export const FsBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2F3061;
`


