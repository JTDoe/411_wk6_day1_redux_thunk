import React, { useState } from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import '../App.css'

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = useState(null | HTMLElement);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.target);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container className="importContainer" maxWidth="sm" >
            <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Menu
                sx={{ borderRadius: 'none'}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <p onClick={props.deleteMake}>Delete</p>
                </MenuItem>
            </Menu>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="make">{make.MakeId}</TableCell>
                                    <TableCell>{make.MakeName}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import