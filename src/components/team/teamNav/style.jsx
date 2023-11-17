import { styled } from "styled-components";

export const s = {
  NavWrapper: styled.div`
    display: flex;
    width: 12.5rem;
    flex-direction: column;
    align-items: flex-start;
  `,
  LogoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  `,
  Logo: styled.img`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 0.625rem;
    border: 1px solid ${props => props.theme.colors.gray1};
  `,
  MemberListWrapper: styled.div`
    display: flex;
    padding: 2.5rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  MemberPlusLayer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  `,
  MemberText: styled.span`
    color: ${props => props.theme.colors.black};

    font-size: 1rem;
  `,
  MemberPlusBtn: styled.button`
    width: 1.5rem;
    height: 1.5rem;
  `,
  PlusBtnImg: styled.img`
    width: 1.5rem;
    height: 1.5rem;
  `,

  MemberList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `
};
