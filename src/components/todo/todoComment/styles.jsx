import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const s = {
  CommentWrappper: styled.div`
    display: flex;
    padding-left: 0px;
    align-items: flex-start;
    width: 100%;
    gap: 0.625rem;
    align-self: stretch;
  `,
  Column: styled.div`
    border-left: thin solid ${p => p.theme.colors.blue};
    height: 41.5px;
  `,
  TextDiv: styled.div`
    flex-grow: 1;
    display: flex;
    padding: 0rem 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3125rem;
    align-self: stretch;
    color: ${p => p.theme.colors.gray2};
    font-family: Pretendard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  CommentLike: styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  Comment: styled.div`
    flex-grow: 1;
    display: flex;
    padding: 0.3125rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    flex: 1 0 0;
    color: ${p => p.theme.colors.gray4};

    font-family: "Pretendard-Medium";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  LikeDiv: styled.div`
    flex-shrink: 0;
    display: flex;
    height: 1.5rem;
    padding: 0.1875rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 0.1875rem;
    color: ${p => p.theme.colors.gray1};
    font-family: "Pretendard-Medium";
    font-size: 0.625rem;
  `,
  LikedBtn: styled(FontAwesomeIcon)`
    color: ${p => p.theme.colors.gray1};
  `,
  LikeBtn: styled.img`
    color: ${p => p.theme.colors.gray1};
    width: 0.75rem;
    height: 0.75rem;
  `
};
