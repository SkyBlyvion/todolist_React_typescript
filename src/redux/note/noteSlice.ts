import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { API_URL } from "../../constants/ApiConstant";
import { RootState } from "../store";


// on définit la structure de l'objet Note
interface Note {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    user: string;
}

// on définit la structure de hydra:member
interface HydraResponse<T> {
    'hydra:member': T[];
}

// on définit la structure de l'objet NoteState
interface NoteState {
    notes: Note[];
    loading: boolean;
}

// on init nos states
const initialState: NoteState = {
    notes: [],
    loading: false,
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<HydraResponse<Note>>) => {
            state.notes = action.payload['hydra:member'];
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    }
});

export const { setNotes, setLoading } = noteSlice.actions;

export const fetchNotes = (id:string | undefined):ThunkAction<void, RootState, unknown, NoteAction> => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get<HydraResponse<Note>>(`${API_URL}/notes?page=1&user.id=${id}`);
        dispatch(setNotes(response.data));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur lors de la recuperation des notes : ${error}`);
        dispatch(setLoading(false));
    }
};

export default noteSlice.reducer;

// Types personnalisés
interface SetNotesAction  {
    type: typeof setNotes.type;
    payload: HydraResponse<Note>;
}

interface setLoadingAction {
    type: typeof setLoading.type;
    payload: boolean;
}

type NoteAction = SetNotesAction | setLoadingAction;