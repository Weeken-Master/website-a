import * as React from 'react';
import Box from '@mui/material/Box';


import { Cascader, Button,Modal } from "antd";
import axios from "axios"


function Tree(props) {

  // http://14.225.44.83:5000/danhmuc
  const [options, setOptions] = React.useState([])

  React.useEffect(()=>{
    axios.get('http://14.225.44.83:5000/danhmuc')
    .then(function (response) {
      setOptions(response.data.data)
    })
  },[])
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk =()=>{
    const data = {
        "data" : props,
        "id_danhmuc" : idProduct
      }
      const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    try{axios.post('http://14.225.44.83:5000/add_product', JSON.stringify(data), customConfig).then(()=>{
  
    })}catch (e) {}
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [idProduct, setIdProduct] = React.useState()

  const onChange = (children) => {
    setIdProduct(children[children.length-1])
  };
  
 

    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
   
  return (
    <div>
       <Button type="primary" onClick={showModal}>
        Thêm danh mục cho sản phẩm
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Cascader
    
      options={options}
      onChange={onChange}
      />
      </Modal>

  
         
    </div>
  )
}

export default Tree