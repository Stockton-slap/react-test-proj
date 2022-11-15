import styled from '@emotion/styled';

export const Description = styled.div`
  background-color: #fff;
  width: 400px;
  border-radius: 5%;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(119, 10, 10);
  margin-top: 20px;
`;

export const Name = styled.p`
  font-weight: 900;
  margin-top: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
`;

export const Tag = styled.p`
  margin-top: 20px;
  color: rgb(119, 118, 118);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Location = styled.p`
  margin-top: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(119, 118, 118);
`;

export const Stats = styled.ul`
  display: flex;
  margin-top: 40px;
  padding: 0;
  margin-bottom: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: rgb(217, 217, 217);
  border-top: 1px solid rgb(119, 118, 118);

  &:not(:last-child) {
    border-right: 1px solid rgb(119, 118, 118);
  }
`;

export const Label = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(247, 247, 247);
`;

export const Quantity = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  padding-top: 10px;
  color: rgb(247, 247, 247);
`;
