import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  height: 100vh;
  color: #ffc793;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  /* height: auto; */
  /* background: black; */
  background: url('/images/3a.png');
  background-size: cover;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .left_image {
    display: flex;
    justify-content: center;
    /* flex-basis: 50%; */
    align-items: center;
    height: 100%;
    img {
      height: 400px;
      width: 400px;
    }
    @media (max-width: 1024px) {
      img {
        height: 400px;
        width: 400px;
      }
    }
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

// Used for providing space between components
export const SpacerXSmall = styled.div``;

// Used for providing space between components
export const SpacerSmall = styled.div``;

// Used for providing space between components
export const SpacerMedium = styled.div``;

// Used for providing space between components
export const SpacerLarge = styled.div``;

// Used for providing a wrapper around a component
export const Container = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  /* flex-basis: 50%; */
  /* @media(max-width: 426px){
    padding-bottom: 30px;
  } */
  .gif {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextTitle = styled.p``;

export const TextSubTitle = styled.p``;

export const TextDescription = styled.p`
  /* color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6; */
`;

export const StyledClickable = styled.div`
  /* :active {
    opacity: 0.6;
  } */
`;
