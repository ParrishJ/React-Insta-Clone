import styled from "styled-components";

const LikeIcon = styled.i`
  font-size: 1.8rem;
  padding: 1rem 0 1rem 0;

  ${props => (props.type === "nav" ? `color: grey; padding: 0;` : null)}
`;

export default LikeIcon;
