import React from 'react';
import SearchAndAuthor from '../SearchAndAuthor/Index';
import Table from '../../components/Table/Table';
import { styled } from '@mui/material/styles';
const Dashboard = (props) => {
    let open = props.open;
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: 0,
        ...(open==='true' && {
        marginLeft: `${props.navWidth+20}px`,
        
        }),
    }),
    );
  return (
    <>
        <SearchAndAuthor />
        <Main open={open}>
            <Table />
        </Main>
    </>
  )
}

export default Dashboard;
