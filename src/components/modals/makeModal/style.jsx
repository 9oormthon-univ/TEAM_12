import { styled } from "styled-components";

export const s = {
  List: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
  `,
  Title: styled.span`
    color: ${p => p.theme.colors.black};

    font-size: 1.25rem;
  `,
  CloseBtn: styled.img`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 1.5rem;
  `,
  FormList: styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
  `,

  FormInput: styled.input`
    display: flex;
    width: ${({ $harf }) => ($harf ? "11.5625" : "25.5625")}rem;
    padding: 1rem 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.625rem;
    background: ${p => p.theme.colors.gray0};
    margin: ${({ $harf }) => $harf && "10px 18px 10px 0px"};
  `,

  FormInputP: styled.span`
    color: ${p => p.theme.colors.gray4};

    font-size: 0.875rem;
  `,

  FormSelect: styled.select`
    display: flex;
    width: 25.5625rem;
    padding: 1rem 1.25rem;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0.625rem;
    background: ${p => p.theme.colors.gray0};
    color: ${p => p.theme.colors.gray4};
  `,

  FormOption: styled.option``,

  SubmitBtn: styled.button`
    display: flex;
    padding: 0.9375rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: 0.625rem;
    border: 1px solid ${p => p.theme.colors.gray2};
    background: ${p => p.theme.colors.gray2};
    color: ${p => p.theme.colors.white};

    font-size: 1rem;
  `,

  DurationDiv: styled.div`
    display: flex;
    flex-direction: row;
  `
};
