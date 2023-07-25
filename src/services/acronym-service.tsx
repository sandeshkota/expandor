import acronyms from '../data/acronyms.json'
import pendingAcronyms from '../data/pending-acronyms.json'
import { IAcronym } from '../models/acronym';

export const getAcronyms = (): IAcronym[] => {
    return acronyms;
}

export const getPendingAcronyms = (): IAcronym[] => {
    return pendingAcronyms;
}