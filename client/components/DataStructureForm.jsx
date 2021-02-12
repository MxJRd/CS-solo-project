import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { PageContext } from '../contexts/PageContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const DataStructureForm = (props) => {
  const classes = useStyles(props.theme);
  const { dataStructure, setDataStructure } = useContext(PageContext);
  const handleChange = (event) => {
    setDataStructure(event.target.value);
  }
  return (
    <FormControl>
      <InputLabel>This is the Form</InputLabel>
      <Select
        labelId={'data-structure-menu-label'}
        id={'data-structure-menu'}
        value={dataStructure}
        onChange={(event) => {
          handleChange(event);
        }}
      >
        <MenuItem value={'Binary_Search_Tree'}>Binary Search Tree</MenuItem>
        <MenuItem value={'Stack'}>Stack</MenuItem>
        <MenuItem value={'Queue'}>Queue</MenuItem>
      </Select>
    </FormControl>
  )
}

export default DataStructureForm;