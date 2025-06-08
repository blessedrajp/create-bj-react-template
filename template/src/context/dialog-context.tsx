
import { createContext, useState } from "react";
export interface DialogProviderProps {
    children: React.ReactNode;
}

export interface DialogContextType {
    openDialog: boolean;
    multiple:boolean
    handleOpenDialog: (data: boolean) => void;
    handleCloseDialog: (data: boolean) => void;
    handleMultiple: (data: boolean) => void;
}
export const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: DialogProviderProps): React.JSX.Element {
    const [openDialog, setDialog] = useState(false);
    const [multiple,setMuliple]=useState(false)
    const handleCloseDialog = ((data: boolean) => {
        setDialog(data)
    })
    const handleOpenDialog = ((data: boolean) => {
        setDialog(data)
    })
    const handleMultiple=((data:boolean)=>{
        setMuliple(data)
    })
    return (
        <DialogContext.Provider value={{ openDialog, handleCloseDialog, handleOpenDialog ,multiple,handleMultiple}}>
            {children}
        </DialogContext.Provider>
    );
}