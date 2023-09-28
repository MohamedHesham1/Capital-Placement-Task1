import { UploadOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { useState } from 'react';
import CardItem from './CardItem';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadCard = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 512,
        height: 210,
        borderRadius: 5,
        border: '1px dashed #000',
        boxShadow: '3px 3px 9px 0px rgba(190, 190, 190, 0.13))',
        fontSize: 14,
        margin: '63px 43px 57px 40px',
      }}
    >
      <UploadOutlined style={{ fontSize: 33 }} />
      <p style={{ fontWeight: '600' }}>Upload cover image</p>
      <p style={{ color: '#979797' }}>
        16:9 ratio is recommended. Max image size 1mb
      </p>
    </div>
  );

  return (
    <CardItem title='Upload cover image' formItemName='coverImage'>
      <Upload
        action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length > 0 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt='example'
          style={{ width: '100%', height: 'auto' }}
          src={previewImage}
        />
      </Modal>
    </CardItem>
  );
};

export default UploadCard;
