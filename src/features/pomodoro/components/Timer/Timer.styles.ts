import styled from 'styled-components';

export const TimerWrapper = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background: #ffff66;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 2px rgba(153, 153, 153, 1);
  cursor: pointer;
`;

export const TimeRemaining = styled.div`
  font-size: 30px;
  color: ${props => props.theme.secondaryText};
`;
