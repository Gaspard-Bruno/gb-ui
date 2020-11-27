import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Body, ErrorText } from '../Text';
import Icon from '../Icon';
import Button from '../Button';
import {
  FileUploaderContainer,
  UploaderRowWrapper,
  UploaderInput,
  UploadedImages,
  UploaderPreviewContainer,
  ThumbsContainer,
  UploaderPreviewInner
} from './styles';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ title, name, action, answers, error }) => {
  const [files, setFiles] = useState(answers || []);

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

  // Convert file to base64 string
  const fileToBase64 = (filename, filepath) => {
    return new Promise(resolve => {
      const file = new File([filename], filepath);
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
      fileToBase64(file?.name, file?.path)
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
      {error && <ErrorText>{error}</ErrorText>}
    </React.Fragment>
  );
};

FileUploader.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  action: PropTypes.func,
  answers: PropTypes.object,
  error: PropTypes.string
};

export default FileUploader;
