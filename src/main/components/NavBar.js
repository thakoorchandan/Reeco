import React from "react";
import styled from "styled-components";

function NavigationBar() {
  const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1e633f;
    height: 60px;
    top: 0;
    position: sticky;
    z-index: 100;
  `;
  const NavBarImage = styled.img`
    width: auto;
    object-fit: contain;
    margin: 0 20px;
  `;
  const IconButton = styled.img`
    width: auto;
    object-fit: contain;
    margin: 0 20px;
  `;
  const NavBarOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
  `;
  const NavigationOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
  `;

  return (
    <>
      <NavBarContainer>
        <NavBarOptionsContainer>
          <NavBarImage src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667388846/reeco/61d55f72e02791825a9a1232_reeco-logo-white_m6fyuw.svg" />
          <NavBarOptionsContainer>
            <NavigationOption>Store</NavigationOption>
            <NavigationOption>Order</NavigationOption>
            <NavigationOption>Analytics</NavigationOption>
          </NavBarOptionsContainer>
        </NavBarOptionsContainer>
        <NavBarOptionsContainer>
          <NavBarImage src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667400559/reeco/icons8-checkout-30_nadj56.png" />
          <NavigationOption>Hello, James</NavigationOption>
          <IconButton src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667401694/reeco/icons8-expand-arrow-24_1_np3fgd.png"></IconButton>
        </NavBarOptionsContainer>
      </NavBarContainer>
    </>
  );
}

export default NavigationBar;
