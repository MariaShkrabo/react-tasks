import { WarningContainer, WarningText } from "./failureWarning.styles";

const FailureWarning = ({text}) => (
  <WarningContainer>
    <WarningText>{text}... Server Not Responding😔</WarningText>
  </WarningContainer>
);

export default FailureWarning;