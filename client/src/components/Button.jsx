import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

// Use a button element for correct semantic meaning and accessibility
const StyledButton = styled.button`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 16px 26px;
  box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
  border: 1px solid ${({ theme }) => theme.primary};
  background: ${({ theme, type }) => (type === "secondary" ? theme.secondary : theme.primary)};
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ flex }) => flex && `flex: 1;`}
  ${({ small }) => small && `padding: 10px 28px;`}
  ${({ outlined, theme }) =>
    outlined &&
    `
    background: transparent;
    color: ${theme.primary};
    box-shadow: none;
  `}
  ${({ full }) => full && `width: 100%;`}

  @media (max-width: 600px) {
    padding: 8px 12px;
  }
`;

const Button = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
  small,
  outlined,
  full,
}) => {
  return (
    <StyledButton
      onClick={() => !isDisabled && !isLoading && onClick && onClick()}
      disabled={isDisabled || isLoading} // Use the standard "disabled" attribute
      type={type}
      flex={flex}
      small={small}
      outlined={outlined}
      full={full}
    >
      {isLoading ? (
        <CircularProgress style={{ width: "18px", height: "18px", color: "inherit" }} />
      ) : (
        <>
          {leftIcon}
          {text}
          {rightIcon}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
