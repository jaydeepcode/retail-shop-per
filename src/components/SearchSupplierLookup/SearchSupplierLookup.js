import React, { useEffect, useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import './SearchSupplierLookup.css';
import axios from 'axios';

const SearchSupplierLookup = () => {
    const [name, setName] = useState('redux');
    const [mobileNumber, setMobileNumber ] = useState('redux');
    const [results, setResults] = useState([]);
    const [url, setUrl] = useState('http://localhost:3001/search-supplier?name=redux');
    // useEffect(() => {
    //     // Focus the input element when the component mounts
    //     if (inputRef.current) {
    //       inputRef.current.focus();
    //     }
    //   }, []);

    const handleSearch = () => {
        useEffect(() => {
            const fetchData = async () => {
               const result = await axios(url)
                setResults(result.data);
            };
            fetchData();
        },[url])
    }

    const selectCustomer = (row) => {
        console.log("row id -->",row)
    }

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '50vw'} }}
            noValidate
            >
            <div style={{textAlign: 'center'}}>
                <TextField required id="name" label="Customer Name" value={name} onChange={e => setName(e.target.value)}></TextField>
                <TextField id="mobileNumber" type="number" label="Mobile Number" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}></TextField>
            </div>
            <div style={{textAlign: 'center'}}>
             <Button sx={{width : '25vw'}} variant="contained" color="primary" onClick={setUrl(`http://localhost:3001/search-supplier?name=${name}`)}>      Search      </Button>
            </div>
            <hr style={{ margin: "20px 0" }} />
                {results.length === 0 ? (<div className='no-results'>
                 <p>No results found.</p>
                <hr />
             </div>) : (
                <TableContainer component={Paper} className="table-container">
                    <Table className='table-result'>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {results.map((row) => (
                                <TableRow key={row.id} className='table-row' onClick={() => selectCustomer(row.name)}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell className='name'>{row.name}</TableCell>
                                    <TableCell>{row.mobileNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
        // <div className="search-container">
        //     <TextField className='input-field' label="Name" ref={inputRef} ></TextField>
        //     <TextField className='input-field' label="Mobile Number" ref={mobileNumberRef}></TextField>
        //     <Button className='button' variant="contained" color="primary" onClick={handleSearch}>      Search      </Button>
        //     <hr style={{ margin: "20px 0" }} />

        //     {results.length === 0 ? (<div className='no-results'>
        //         <p>No results found.</p>
        //         <hr />
        //     </div>) : (
        //         <TableContainer component={Paper} className="table-container">
        //             <Table>
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell>ID</TableCell>
        //                         <TableCell>Name</TableCell>
        //                         <TableCell>Mobile Number</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {results.map((row) => (
        //                         <TableRow key={row.id}>
        //                             <TableCell>{row.id}</TableCell>
        //                             <TableCell>{row.name}</TableCell>
        //                             <TableCell>{row.mobileNumber}</TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>
        //     )}
        // </div>
    );
}

export default SearchSupplierLookup;