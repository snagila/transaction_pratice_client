import React from "react";
import { Container } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import { useSelector } from "react-redux";

const TransActionPage = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <TopNavbar userName={user.name}/>
      </Container>
    </>
  );
};

export default TransActionPage;
