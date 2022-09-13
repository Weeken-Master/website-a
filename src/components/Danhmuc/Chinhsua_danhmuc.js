import React ,{useState} from 'react'
import { Col, Row ,Button, Input,Select,Cascader} from 'antd';
import { Label } from 'reactstrap';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

function Chinhsua_danhmuc() {
  const { Search } = Input;
  const { Option } = Select;
  const { TextArea } = Input;
  const [options, setOptions] = React.useState([])
  const [name_01,setname_01] = React.useState([])

  //imgae
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    
   
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>

      

        <Row >
        <Col span={24}><Button type="primary">TẤT CẢ DANH MỤC HIỆN TẠI</Button></Col>
        <Col  style={{marginTop:"2rem"}} span={12}>
        
        <Button type="primary" style={{ marginTop:"2rem", width: "100%"}}>TẠO DANH MỤC </Button>
        <Button block  style={{width: "30%", marginTop:"1rem"}}>Chỉnh sửa danh mục bậc 1</Button>
        <Input.Group compact style={{marginTop:"0.5rem"}}>
        <Input style={{ width: '90%' , marginTop:"0.2rem"}} placeholder="Nhập danh mục cấp 1"></Input> 
        <Input style={{ width: '90%',marginTop:"0.2rem" }} placeholder="Nhập tiêu đề Website"></Input> 
        <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nhập tiêu đề Google"></Input> 
        <TextArea showCount maxLength={90} style={{ height: 120 ,width: '90%',marginTop:"0.2rem"}} />
        <Input style={{ width: '90%' ,marginTop:"0.2rem", marginBottom:"0.2rem"}} placeholder="Nhập URL "></Input> 
        <Upload
        style={{ marginTop:"0.2rem"}}

        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '90%',
          }}
          src={previewImage}
        />
      </Modal>
    
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung đầu"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung cuối"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem",marginBottom:"0.2rem"}} placeholder="Tag"></Input> 
      <Button type="primary" style={{ width: '30%'}}>Áp dụng</Button>
      <Button type="primary" style={{ width: '30%', marginLeft:"2rem"}}>Xóa</Button>
      </Input.Group>
        </Col>
    
{/*  bậc 2 */}
        <Col style={{marginTop:"2rem"}} span={12}>
        <Button type="primary" style={{ marginTop:"2rem", width: "100%"}}>TẠO DANH MỤC </Button>
        <Button block  style={{width: "30%", marginTop:"1rem"}}> Chỉnh sửa danh mục bậc 2</Button>
       
        <Input.Group compact style={{marginTop:"0.5rem"}}>
        <Input style={{ width: '90%' , marginTop:"0.2rem"}} placeholder="Nhập danh mục cấp 2"></Input> 
        <Input style={{ width: '90%',marginTop:"0.2rem" }} placeholder="Nhập tiêu đề Website"></Input> 
        <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nhập tiêu đề Google"></Input> 
        <TextArea showCount maxLength={90} style={{ height: 120 ,width: '90%',marginTop:"0.2rem"}} />
        <Input style={{ width: '90%' ,marginTop:"0.2rem", marginBottom:"0.2rem"}} placeholder="Nhập URL "></Input> 
        <Upload
        style={{ marginTop:"0.2rem"}}

        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '90%',
          }}
          src={previewImage}
        />
      </Modal>
    
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung đầu"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung cuối"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem",marginBottom:"0.2rem"}} placeholder="Tag"></Input> 
        <Button type="primary" style={{ width: '30%'}}>Áp dụng</Button>
        <Button type="primary" style={{ width: '30%', marginLeft:"2rem"}}>Xóa</Button>
      </Input.Group>
        </Col>

{/*  tạo danh mục b3 */}
        <Col style={{marginTop:"2rem"}} span={12}>
      
        <Button block  style={{width: "30%", marginTop:"1rem"}}>Chỉnh sửa danh mục bậc 3</Button>
       
        <Input.Group compact style={{marginTop:"0.5rem"}}>
        <Input style={{ width: '90%' , marginTop:"0.2rem"}} placeholder="Nhập danh mục cấp 3"></Input> 
        <Input style={{ width: '90%',marginTop:"0.2rem" }} placeholder="Nhập tiêu đề Website"></Input> 
        <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nhập tiêu đề Google"></Input> 
        <TextArea showCount maxLength={90} style={{ height: 120 ,width: '90%',marginTop:"0.2rem"}} />
        <Input style={{ width: '90%' ,marginTop:"0.2rem", marginBottom:"0.2rem"}} placeholder="Nhập URL "></Input> 
        <Upload
        style={{ marginTop:"0.2rem"}}

        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '90%',
          }}
          src={previewImage}
        />
      </Modal>
    
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung đầu"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung cuối"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem",marginBottom:"0.2rem"}} placeholder="Tag"></Input> 
        <Button type="primary" style={{ width: '30%'}}>Áp dụng</Button>
        <Button type="primary" style={{ width: '30%', marginLeft:"2rem"}}>Xóa</Button>
      </Input.Group>
        </Col>



{/*  bậc 4 */}


<Col style={{marginTop:"2rem"}} span={12}>
      
        <Button block  style={{width: "30%", marginTop:"1rem"}}>Chỉnh sửa danh mục bậc 4</Button>
        
        <Input.Group compact style={{marginTop:"0.5rem"}}>
        <Input style={{ width: '90%' , marginTop:"0.2rem"}} placeholder="Nhập danh mục cấp 4"></Input> 
        <Input style={{ width: '90%',marginTop:"0.2rem" }} placeholder="Nhập tiêu đề Website"></Input> 
        <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nhập tiêu đề Google"></Input> 
        <TextArea showCount maxLength={90} style={{ height: 120 ,width: '90%',marginTop:"0.2rem"}} />
        <Input style={{ width: '90%' ,marginTop:"0.2rem", marginBottom:"0.2rem"}} placeholder="Nhập URL "></Input> 
        <Upload
        style={{ marginTop:"0.2rem"}}

        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '90%',
          }}
          src={previewImage}
        />
      </Modal>
    
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung đầu"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem"}} placeholder="Nội dung cuối"></Input> 
      <Input style={{ width: '90%' ,marginTop:"0.2rem",marginBottom:"0.2rem"}} placeholder="Tag"></Input> 
        <Button type="primary" style={{ width: '30%'}}>Áp dụng</Button>
        <Button type="primary" style={{ width: '30%', marginLeft:"2rem"}}>Xóa</Button>
      </Input.Group>
        </Col>









        </Row>
    
    
    </>
  )
}

export default  Chinhsua_danhmuc