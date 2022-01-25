import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  height: 100vh;
  /* height: auto; */
  background: #dbcbbd;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left_image {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
    align-items: center;
    img {
      height: 500px;
      width: 500px;
    }
    @media (max-width: 1024px) {
      img {
        height: 400px;
        width: 400px;
      }
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 425px) {
    .left_image {
      img {
        height: 300px;
        width: 300px;
      }
    }
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  /* @media(max-width: 425px){
    padding-bottom: 30px;
  } */
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
