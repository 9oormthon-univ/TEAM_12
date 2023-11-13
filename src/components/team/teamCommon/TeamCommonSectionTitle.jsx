import { s } from "./style.jsx";

function TeamCommonSectionTitle({ title }) {
  return (
    <s.SectionTitleWrapper>
      <s.SectionTitleFrame>
        <s.SectionTitle>{title}</s.SectionTitle>
      </s.SectionTitleFrame>
      <s.SectionTitleLine></s.SectionTitleLine>
    </s.SectionTitleWrapper>
  );
}

export default TeamCommonSectionTitle;
