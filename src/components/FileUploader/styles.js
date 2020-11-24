import styled from 'styled-components';
import { Row } from '../Layout';

export const FileUploaderContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px dashed ${props => props.theme.colors.mediumBeige};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  outline: none;
  transition: border 0.24s ease-in-out;
  align-items: center;
  button,
  p {
    margin: 8px !important;
  }
  svg {
    margin: 10px;
  }
`;

export const UploaderRowWrapper = styled(Row)`
  align-items: center;
  justify-content: center;
`;

export const UploaderPreviewContainer = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100px;
  height: 100px;
  padding: 4;
  box-sizing: border-box;
`;

export const UploadedImages = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const UploaderInput = styled.input``;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const UploaderPreviewInner = styled.div`
  display: flex;
  overflow: hidden;
`;
