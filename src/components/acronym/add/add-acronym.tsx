import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { IAcronym } from "../../../models/acronym";
import { CreateGUID } from "../../../utils/guid";

export default function AddAcronym({SubmitAcronym}: {SubmitAcronym:any}) {
    const emptyAcronym: IAcronym = {
        id: CreateGUID(),
        shortForm: '',
        fullForm: '',
        description: ''
    }
    
    const [acronymToAdd, setAcronymToAdd] = useState<IAcronym>(emptyAcronym);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    function openDialog() {
        setIsDialogOpen(true);
    }
    function closeDialog() {
        setAcronymToAdd(emptyAcronym);
        setIsDialogOpen(false);
    }

    function updateAcronym(event: any){
        setAcronymToAdd({ ...acronymToAdd, [event.target.name]:event.target.value });
    }

    function Submit() {
        SubmitAcronym(acronymToAdd);
        setAcronymToAdd(emptyAcronym);
        setIsDialogOpen(false);
    }
    
    return (
        <>
            <Button variant="outlined" onClick={openDialog}>
                Add Acronym
            </Button>
            <Dialog open={isDialogOpen} onClose={closeDialog}>
                <DialogTitle>Add Acronym</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        The acronym will be submitted for review
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="shortForm"
                        label="Short Form"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={acronymToAdd.shortForm}
                        onChange={updateAcronym}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="fullForm"
                        label="Full Form"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={acronymToAdd.fullForm}
                        onChange={updateAcronym}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={acronymToAdd.description}
                        onChange={updateAcronym}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button onClick={Submit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}