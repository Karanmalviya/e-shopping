import styled from "styled-components";
import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Stack } from "@mui/material";

//-------------------------Container--------------------------------//
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//-------------------------Left--------------------------------//
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
//-------------------------Center--------------------------------//
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
//--------------------------Right-------------------------------//
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" ,cursor: "pointer" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Stack spacing={2} direction="row">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Stack>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
