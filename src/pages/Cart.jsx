import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";

const Container = styled.div``;

export default function Cart() {
  return <Container>
	<Navbar/>
	<Annoucement />
	<Footer />
  </Container>;
}
