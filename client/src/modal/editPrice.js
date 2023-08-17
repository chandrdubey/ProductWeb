
import {Table, Form,  Button, Modal, InputNumber} from 'antd'
import { useState } from 'react';

const EditPrice = ({price, isModalOpen, handleOk, handleCancel, id, onChange})=>{
    console.log(+price, )
    return(
        <Modal title="Edit Price" open={isModalOpen}  onOk={()=> handleOk(price, id)} onCancel={handleCancel} >
         <InputNumber  defaultValue={+price} onChange={onChange} />

       </Modal>
    )
}

export default EditPrice