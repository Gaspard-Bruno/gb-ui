import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Body, ErrorText, SmallBody } from '../Text';
import Icon from '../Icon';
import Button from '../Button';
import {
  FileUploaderContainer,
  UploaderRowWrapper,
  UploaderInput,
  UploadedImages,
  UploaderPreviewContainer,
  ThumbsContainer,
  UploaderPreviewInner,
  AnswersContainer,
  AnswersTitleHolder,
  AnswersFilesContainer,
  AnswersTextHolder,
  AnswersIconHolder
} from './styles';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ title, name, action, answers, error }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
        })
      );
    }
  });
  const handleFileDownload = (url, name) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = url;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const displayAnswers = answers => {
    const files = answers?.map((elem, i) => {
      const fileName = elem?.filename?.split('.')[0];
      const fileExtension = elem?.filename
        ?.split('.')
        ?.pop()
        ?.toUpperCase();
      return (
        <AnswersFilesContainer key={elem.filename}>
          <Icon name={fileExtension !== 'PDF' ? 'Arquive' : 'PDF'} />
          <AnswersTextHolder>
            {fileName}
            <SmallBody>Ficheiro {fileExtension}</SmallBody>
          </AnswersTextHolder>
          <AnswersIconHolder>
            <span
              role='presentation'
              onClick={() => handleFileDownload(elem.url, elem.filename)}
            >
              <Icon name='download' />
            </span>
            {/* <span>
              <Icon name='trash' />
            </span> */}
          </AnswersIconHolder>
        </AnswersFilesContainer>
      );
    });
    return (
      <AnswersContainer>
        <AnswersTitleHolder>
          <SmallBody>Ficheiros:</SmallBody>
        </AnswersTitleHolder>
        <div>{files}</div>
      </AnswersContainer>
    );
  };

  // Convert file to base64 string
  const fileToBase64 = file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      // Read file content on file loaded event
      reader.onload = function(event) {
        resolve(event.target.result);
      };

      // Convert data to base64
      reader.readAsDataURL(file);
    });
  };

  const uploadBase64Files = urlFiles => {
    const newFiles = [];
    urlFiles.forEach(file => {
      fileToBase64(file)
        .then(response => newFiles.push(response))
        .catch(e => e);
    });
    return newFiles;
  };

  useEffect(() => {
    if (action) {
      action(uploadBase64Files(files));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const filesPreview = files?.map(file => (
    <React.Fragment key={file?.name}>
      {file?.type === 'application/pdf' ? (
        <Body alt='true'>Ficheiros: {file.name}</Body>
      ) : (
        <UploaderPreviewContainer key={file.name}>
          <UploaderPreviewInner key={file.name}>
            <UploadedImages key={file.path} src={file.preview} alt='' />
          </UploaderPreviewInner>
        </UploaderPreviewContainer>
      )}
    </React.Fragment>
  ));
  return (
    <React.Fragment key={'file-uploader'}>
      {title && <Body>{title}</Body>}
      {answers && answers.length > 0 ? (
        displayAnswers(answers)
      ) : (
        <FileUploaderContainer {...getRootProps()}>
          <UploaderRowWrapper>
            <Icon name='upload' />
            <Body alt='true'>Arraste e solte a sua imagem aqui </Body>
            <UploaderRowWrapper>
              <Body alt='true'>ou</Body>
            </UploaderRowWrapper>
          </UploaderRowWrapper>
          <>
            <UploaderInput {...getInputProps()} />
            <Button
              isFullWidth
              action={open}
              type='button'
              text='Carregue aqui'
              btnType='primary'
            />
          </>
          <ThumbsContainer>{filesPreview}</ThumbsContainer>
        </FileUploaderContainer>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </React.Fragment>
  );
};

FileUploader.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  action: PropTypes.func,
  answers: PropTypes.array,
  error: PropTypes.string
};

export default FileUploader;
