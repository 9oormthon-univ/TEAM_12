import { Link } from "react-router-dom";
import styled from "styled-components";

export const s ={
  Backdrop : styled(Link)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 29;
    background-color: rgba(0, 0, 0, 0.75);
  `,
  Content : styled.div`
    flex-direction: column;
    flex-shrink: 0;
    align-self: stretch;
    position: fixed;
    top: 0;
    right: 0;
    width: 45%;
    padding: 1.875rem 2.5rem 2.5rem 2.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    background: #FFFFFF;
    height: 100%;
  `,
}