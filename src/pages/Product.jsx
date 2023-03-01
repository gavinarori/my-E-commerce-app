import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { NavLink } from 'react-router-dom';

const Container = styled.div`
background-color:black;
color:white;

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://as1.ftcdn.net/v2/jpg/03/84/47/90/1000_F_384479026_BvRV6ZNwoV8UCighnQaQB5WfFiBGUaHW.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
          Head to toe denim is back in a major way with the Classic Denim Jumpsuit. With chic utilitarian tailoring, this jumpsuit features an open collar with button down front, defined elastic waist, removable denim d-ring belt, relaxed leg with front pockets, long sleeves with button cuffs and slightly cropped leg.

          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="lightgray" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            
            <NavLink to="/Cart" end>
            <Button>ADD TO CART</Button>
            </NavLink>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src="https://as1.ftcdn.net/v2/jpg/03/00/21/22/1000_F_300212230_BXJukhXke8fzwXYzvXzWGfW0JRphXWEY.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Beach shirts</Title>
          <Desc>
          Before slipping into just any faded T-shirt or tank top, consider the best beach shirts for women as your new go-to summer cover-up. Sleeveless tops and dresses may always have a place in your summer wardrobe, but this year it’s all about easygoing blouses and simple button-downs that lean into the coastal grandma aesthetic—no cheesy flamingos or palm trees here. 
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="lightgray" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <NavLink to="/Cart" end>
            <Button>ADD TO CART</Button>
            </NavLink>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src="https://as1.ftcdn.net/v2/jpg/02/52/94/48/1000_F_252944814_NQG0Wg2LudOA5x3htdPN4GSpdwEE9T3N.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Leather Sweater</Title>
          <Desc>
          A leather jacket is a jacket-length coat that is usually worn on top of other apparel or item of clothing, and made from the tanned hide of various animals. The leather material is typically dyed black, or various shades of brown, but a wide range of colors is possible. Leather jackets can be designed for many purposes, and specific styles have been associated with subcultures such as greasers, motorcyclists and bikers, mobsters, military aviators (especially during and directly after World War II) and music subcultures (punks, goths, metalheads, rivetheads), who have worn the garment for protective or fashionable reasons, and occasionally to create a potentially intimidating appearance.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="lightgray" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <NavLink to="/Cart" end>
            <Button>ADD TO CART</Button>
            </NavLink>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <ImgContainer>
          <Image src=" https://as1.ftcdn.net/v2/jpg/05/66/21/10/1000_F_566211001_18HcxLn9hVIBXCSXNE5vD5lz5IVQ5gZN.jpg"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Flannel T-shirts</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="lightgray" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <NavLink to="/Cart" end>
            <Button>ADD TO CART</Button>
            </NavLink>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;