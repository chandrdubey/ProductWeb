import './App.css';
import {Table, Button, Select} from 'antd'
import EditPrice from './modal/editPrice';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(null) 
  const [productId, setProductId] = useState(null) 
  const [priceSort, setPriceSort] = useState(0) 


  const onChange = (res) => {

      console.log(res)
       setPriceValue(res)
  }

 
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
   
    {
      title: 'Label',
      key: 'label',
      dataIndex: 'label',
  
    },
    {
      title: 'price',
      key: 'price',
      dataIndex: 'price',
  
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (_, {image})=>(
        
          <a href={image} target="_blank"  > {image}</a>
      )
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
  
    },
    {
      title: 'description',
      key: 'description',
      dataIndex: 'description',
  
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, {price, id}) => (
        <>
         <Button type="primary" onClick={()=>showModal({price, id})}>
          Edit Price
        </Button>
         <EditPrice  handleCancel={handleCancel} handleOk={handleOk} isModalOpen={isModalOpen} price={priceValue} id={productId} key={id} onChange={onChange}/>

         <Button type="primary" onClick={()=>reset(id)} style={ {"margin":"2px"}}>
           reset
        </Button>
        </>
      ),
    },
  ];
  
  const reset = async (id)=>{
    const data = {id, isReset:true};
    await updateProduct(data)
    alert("Price updated successfully")
  }


  const showModal = ({price, id}) => {
    setPriceValue(price);
    setProductId(id)
    setIsModalOpen(true);

  };


 
  const handleOk = async(priceValue, id) => {
    const data = {price: priceValue, id };
    console.log(data)
    await updateProduct(data);

    handleCancel();
    alert("Price updated successfully")

  };

  const updateProduct = (data)=>{
    axios.put('http://localhost:3001/api/products',data).then((res) => {
    getAllProducts();
  }
    )
}

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getAllProducts = () => {
    axios.get(`http://localhost:3001/api/products?priceSort=${priceSort}`)
    .then(res => {
      setAllProducts(res.data)
    })
  }
  const handleSorting = (value) => {
   setPriceSort(value)
   
  }
    useEffect(() => {
      getAllProducts();
    }, [priceSort])
  return (
    <div className="App">
      <contextHolder/>
      <header className="App-header">
        <h2>All Products</h2>
      <Select
      value={priceSort}
      style={{ width: 120, margin: '5px'}}
      onChange={handleSorting}
      options={[
        { value: 0, label: 'Price Sort' },

        { value: -1, label: 'Descending' },
        { value: 1, label: 'Ascending' },
    
      ]}
    />
      <Table columns={columns} dataSource={allProducts} />;
      </header>
    </div>
  )
}

export default App;
