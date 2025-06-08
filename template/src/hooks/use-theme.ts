import { useContext } from "react";
import {ThemeContext, type ThemeContextType } from "../context/theme-context";

export function useTheme():ThemeContextType{
    const context=useContext(ThemeContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context
}