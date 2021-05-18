import styled from 'styled-components';
import { Row } from '../Layout';

export const FileUploaderContainer = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px dashed ${props => props.theme.colors.brand?.altLight};
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

export const AnswersContainer = styled.div`
  width: 100%;
`;

export const AnswersTitleHolder = styled.div`
  border-radius: 2px;
  min-height: 48px;
  align-items: center;
  display: flex;
  background-color: ${props => props.theme.colors?.brand?.altLight};
  p {
    margin: ${props => props.theme.margin}px;
  }
`;

export const AnswersFilesContainer = styled.div`
  border-bottom: 1px solid #d2ccc6;
  margin-top: ${props => props.theme.margin}px;
  padding: 0px ${props => props.theme.margin}px;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
  }
`;

export const AnswersTextHolder = styled.div`
  margin-left: ${props => props.theme.margin * 2.5}px;
  flex: 1;
`;

export const AnswersIconHolder = styled.div`
  flex: 0;
  svg {
    path {
      fill: ${props => props.theme.colors.grey};
    }
  }
`;
