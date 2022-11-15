import styled from '@emotion/styled';

export const FriendItem = styled.li`
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 300px;
  padding: 20px 0;
  margin: 0 auto;
  background-color: #fff;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
  width: 20px;
  display: block;
  height: 20px;
  border-radius: 50%;
  margin: 0 10px;

  background-color: ${p => {
    if (p.isOnline) {
      return 'rgb(24, 158, 14)';
    } else return 'rgb(207, 4, 4)';
  }};
`;

export const Avatar = styled.img`
  margin-right: 15px;
  background-color: rgb(247, 247, 247);
  padding: 10px;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
`;
