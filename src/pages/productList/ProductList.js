import React from 'react';
import './productList.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import {AiOutlineDelete} from 'react-icons/ai';
import { productRows } from '../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [data,setData]=useState(productRows);
        const handleDelete=(id)=>{
            setData(data.filter((item)=>item.id!==id))
           }
           const columns = [
            { field: "id", headerName: "ID", width: 90 },
            {
              field: "product",
              headerName: "Product",
              width: 200,
              renderCell: (params) => {
                return (
                  <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.name}
                  </div>
                );
              },
            },
            { field: "stock", headerName: "Stock", width: 200 },
            {
              field: "status",
              headerName: "Status",
              width: 120,
            },
            {
              field: "price",
              headerName: "Price",
              width: 160,
            },
            {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params) => {
                return (
                  <>
                    <Link to={"/product/" + params.row.id}>
                      <button className="productListEdit">Edit</button>
                    </Link>
                    <AiOutlineDelete
                      className="productListDelete"
                      onClick={() => handleDelete(params.row.id)}
                    />
                  </>
                );
              },
            },
          ];
    return (
        
        <div className='productList'>
            <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
        </div>
    );
}

export default ProductList;
