import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: rgb(131,58,180);
background: linear-gradient(240deg, rgba(131,58,180,1) 0%, rgba(101,5,18,0.9976365546218487) 30%, rgba(252,176,69,1) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;