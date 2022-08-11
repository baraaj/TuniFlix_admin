import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import './userList.css';
import {AiOutlineDelete} from 'react-icons/ai';
import { userRows } from '../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function UserList() {
  const [data,setData]= useState(userRows);
  const handleDelete=(id)=>{
   setData(data.filter((item)=>item.id!==id))
  }
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200 ,renderCell:(params)=>{
      return(
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt="" /> 
          {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 200}, 
    {
      field: 'status',
      headerName: 'Status',
      
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={'/users/'+params.row.id}>
          <button className='userListEdit'>Edit</button>
          </Link>
         <AiOutlineDelete className='userListDelete' onClick={()=>handleDelete(params.row.id)} /> 
          </>
        )
      }
    },
    
  ];
  return (
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
  );
}
