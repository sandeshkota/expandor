import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AcronymList from "./list/acronym-list";
import { IAcronym } from '../../models/acronym';
import { useEffect, useState } from 'react';
import { getAcronyms } from '../../services/acronym-service'
import { Grid } from '@mui/material';
import SearchBar from '../shared/search-bar';
import AddAcronym from './add/add-acronym';

export default function Acronyms() {
    const [acronyms, setAcronyms] = useState<IAcronym[]>([{ id: '', shortForm: '', fullForm: '', description: ''}]);
    const [filteredAcronyms, setFilteredAcronyms] = useState<IAcronym[]>();
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        let acronyms = getAcronyms();
        setAcronyms(acronyms);
    }, []);

    let fa = acronyms.slice();
    if(searchText !== '')
    {
        fa = fa?.filter(a => a.shortForm.startsWith(searchText));
    }

    function SubmitAcronym(acronymToAdd: any) {
        setSearchText('');
        setAcronyms([...acronyms, acronymToAdd]);
    }

    return (
        <>
            <br/><br/>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <SearchBar searchText={searchText} setSearchText={setSearchText} />
                    <br/><br/>
                    <AcronymList acronymsToShow={fa} />
                </Grid>
                <Grid item xs={2} textAlign='center'>
                    <AddAcronym SubmitAcronym={SubmitAcronym} />
                </Grid>
            </Grid>
           
        </>
    )
}