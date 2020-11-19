import React, { createRef, useEffect, useState } from 'react';
import DropZone from 'react-dropzone';
import { Row, Col } from '../Layout';
import { Body, Heading } from '../Text';
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

const FileUploader = ({ title, name, action, answers }) => {
  const [files, setFiles] = useState(answers || []);

  const handleDropAccept = async files => {
    const reader = new FileReader();
    const base64 = [];
    files.map(file => {
      reader.readAsDataURL(file);
      reader.onload = function() {
        base64.push(reader.result);
      };
    });
    action && action(base64);
  };

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
    /* onDropAccepted: handleDropAccept(files) */
  });

  /*return (
     <DropZone
      ref={dropzoneRef}
      maxFiles={5}
      accept={'image/*, application/pdf'}
      onDropAccepted={action(files)}
      onDrop={files => handleDrop}
    >
      {({ getRootProps, getInputProps, acceptedFiles, open }) => { */
  /* const handleDrop = acceptedFiles => {
    setFiles(
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  }; */
  const filesToBase64 = files;
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));

    //
    const reader = new FileReader();
    const base64 = [];
    files.map(file => {
      reader.readAsDataURL(file);
      reader.onload = function() {
        base64.push(reader.result);
      };
    });
    action && action(base64);
  }, [action, files]);

  const filesPreview = files?.map(file => (
    <>
      {file?.type === 'application/pdf' ? (
        <Body alt>Ficheiros: {file.name}</Body>
      ) : (
        <UploaderPreviewContainer key={file.name}>
          <UploaderPreviewInner key={file.name}>
            <UploadedImages key={file.path} src={file.preview} alt='' />
          </UploaderPreviewInner>
        </UploaderPreviewContainer>
      )}
    </>
  ));
  return (
    <>
      {title && <Body>{title}</Body>}
      <FileUploaderContainer {...getRootProps()}>
        <UploaderRowWrapper>
          <Icon name='upload' />
          <Body alt>Arraste e solte a sua imagem aqui </Body>
          <UploaderRowWrapper>
            <Body alt>ou</Body>
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
    </>
  );
  /*       }}
    </DropZone>
  ); */
};

export default FileUploader;
