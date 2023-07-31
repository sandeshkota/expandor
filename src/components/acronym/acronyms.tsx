import AcronymList from "./list/acronym-list";
import { IAcronym } from '../../models/acronym';
import { useEffect, useState } from 'react';
import { getAcronyms } from '../../services/acronym-service'
import { Grid } from '@mui/material';
import SearchBar from '../shared/search-bar';
import AddAcronym from './add/add-acronym';

export default function Acronyms() {
    const [acronyms, setAcronyms] = useState<IAcronym[]>([{ id: '', shortForm: '', fullForm: '', description: ''}]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        let acronyms = getAcronyms();
        setAcronyms(acronyms);
    }, []);

    let fa = acronyms.slice();
    if(searchText !== '')
    {
        fa = fa?.filter(a => a.shortForm.startsWith(searchText))
        .sort((a,b) => (a.shortForm > b.shortForm) ? 1 : ((b.shortForm > a.shortForm) ? -1 : 0))
    }

    function SubmitAcronym(acronymToAdd: any) {
        setSearchText('');
        setAcronyms([...acronyms, acronymToAdd]);
    }

    return (
        <>
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