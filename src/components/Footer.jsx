import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    background: rgb(9,3,3);
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    color:white;
    ${mobile({ flexDirection: "column",height: "100%" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    cursor:pointer;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    cursor:pointer;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
    ${mobile({ display: "none" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 60%;
      ${mobile({ display: "none" })}
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>HOME SHOP</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
  <a href="https://www.facebook.com/gavin arori">
    <SocialIcon color="3B5999">
      <Facebook />
    </SocialIcon>
  </a>
  <a href="https://www.instagram.com/brevia_dos/">
    <SocialIcon color="E4405F">
      <Instagram />
    </SocialIcon>
  </a>
  <a href="https://twitter.com/gavinogwanwa">
    <SocialIcon color="55ACEE">
      <Twitter />
    </SocialIcon>
  </a>
  <a href="https://www.pinterest.com/arorigavincode/">
    <SocialIcon color="E60023">
      <Pinterest />
    </SocialIcon>
  </a>
</SocialContainer>

        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +254 705 470 037
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> homeshopcontact@gmail.com
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;