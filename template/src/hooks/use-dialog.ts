import { useContext } from "react";
import { DialogContext, type DialogContextType } from "../context/dialog-context";

export function useDialog():DialogContextType{
    const context=useContext(DialogContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context
}