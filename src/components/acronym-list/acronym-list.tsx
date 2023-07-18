import { useState } from "react";

function SearchBar({searchTerm, setSearchTerm}: {searchTerm:any, setSearchTerm: any}) {
    let text = "";
    const setChangeText = (e: any) => {
        text = e.target.value;
    }
    
    return (
        <>
            <input type="text" value={searchTerm} onChange={(e) => setChangeText(e)} />
            <input type="button" value="Search" onClick={(e) => setSearchTerm(text)} />
        </>
    );
}

function AddAcronymBar({ addAcronym }: {addAcronym:any}) {
    let text = "";
    const setChangeText = (e: any) => {
        text = e.target.value;
    }

    return (
        <>
            <input type="text" onChange={(e) => setChangeText(e)} />
            <input type="button" value="Add" onClick={(e) => addAcronym(text)} />
        </>
    );
}

function AcronymList({entries}: {entries:any}) {

    return (
        <>
            <ul>
                <b>Acronyms</b>
                {
                    entries.map((acronym: any) => {
                        return (
                            <li key={acronym.shortForm}>
                                {acronym.shortForm} - {acronym.fullForm}
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default function Acronyms() {
    const sourceAcronyms = [
        { shortForm: "ABC", fullForm: "ok ok ok" },
        { shortForm: "DEF", fullForm: "no no no" }
    ];
    const [acronyms, SetAcronyms] = useState(sourceAcronyms);
    const [searchTerm, SetSearchTerm] = useState();

    const AddAcronym = (userInput: string) => {
        const newAcronym = { shortForm: userInput, fullForm: "sample" };
        SetAcronyms((acronyms) => [newAcronym, ...acronyms]);
    }

    const searchAcronym = (userInput: string) => {
        let filteredAcronyms = sourceAcronyms.slice().filter((a) => a.shortForm === userInput);
        SetAcronyms(filteredAcronyms);
    }

    return (
        <>
            <h1>Acronyms</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={searchAcronym} />
            <br/>
            <AddAcronymBar addAcronym={AddAcronym} />
            <br/>
            <AcronymList entries={acronyms} />
        </>
    );
}