import React from 'react';
import Grid from '@mui/material/Grid';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const SearchAndAuthor = () => {
  return (
    <Grid container spacing={2} className="searchWrap">
        <Grid item md={6}>
            <div className='searchWrapper'>
                <div className='searchItem'>
                    <button><SearchIcon /></button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" width="100%"  placeholder='Spam Mail Project'/>
                </div>
            </div>
        </Grid>
        <Grid item md={6}>
            <div className='profileWrapper'>
                <div className='profileItem'>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className='profile_lft_details'>
                                <p>Spam Mail Project</p>
                                <br/>
                                <div className='profile_action_icns'>
                                    <FileOpenOutlinedIcon />&nbsp;&nbsp;
                                    <NoteAltOutlinedIcon />&nbsp;&nbsp;
                                    <DeleteOutlinedIcon />&nbsp;&nbsp;
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='profile_Rht_details'>
                                <p>Author Name: Nagarajan More</p>
                                <p>Created On: DD/MM/YYYY</p>
                                <p>Last Updated On: DD/MM/YYYY</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
    </Grid>
  )
}
export default SearchAndAuthor;