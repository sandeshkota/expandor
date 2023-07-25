import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import { useEffect, useState } from "react";

export default function SearchBar({searchText, setSearchText} : {searchText: string, setSearchText: any}) {
    const [text, setText] = useState<string>('');
    const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false);

    useEffect(() => {
        setText(searchText);
    }, [searchText])

    function Search() {
        setSearchText(text);
    }

    function ClearSearch() {
        setText('');
        setSearchText('');
    }

    function onKeyDown(event: any) {
        if (event.keyCode === 13){
            Search();
        }
    }

    function searchbarFocusedIn() {
        setIsSearchBarFocused(true);
    }
    function searchbarFocusedOut(){
        setIsSearchBarFocused(false);
    }

    return (
        <>
            <Paper
                component="form"
                sx={{  display: 'flex', alignItems: 'center' }}
                elevation={isSearchBarFocused ? 6 : 2 }
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Acronyms..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    fullWidth
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={onKeyDown}
                    onFocus={searchbarFocusedIn}
                    onBlur={searchbarFocusedOut}
                />
                <IconButton type="button" onClick={Search} >
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" onClick={ClearSearch} >
                    <CancelIcon />
                </IconButton>
            </Paper>
        </>
    );
}