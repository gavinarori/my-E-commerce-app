import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "./Footer";

const Container = styled.div`
  height: 90vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:url("https://as1.ftcdn.net/v2/jpg/02/80/90/56/1000_F_280905657_OovJyAI5085Hl6EdsnFjNvcIKsWj9OSN.jpg")
  center no-repeat;
background-size: cover;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.form`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid lightgray;
  padding-bottom:24px;
  margin-bottom: 90px;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Order with us</Title>
      <Desc>Get your shopping on the doorstep</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Input placeholder="Your Home adress" required />
        <Input placeholder="Your Street" />
        <Input placeholder="Your postal code" />


        <Button>
          <Send />
        </Button>
      </InputContainer>
      <Footer />
    </Container>

  );
};

export default Newsletter;
