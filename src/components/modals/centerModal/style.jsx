import { styled } from "styled-components";

export const s = {

    Backdrop : styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 29;
        background-color: rgba(0, 0, 0, 0.75);
    `,

    ModalContent : styled.div`
        position: fixed;
        top: 10vh;
        left: 34%;
        width: 30.6rem;
        padding: 1.875rem 2.5rem 2.5rem 2.5rem;
        border-radius: 14px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 30;
        background: ${p => p.theme.colors.white};
    `,
}