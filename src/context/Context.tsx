import { createContext } from 'react';

//- useContext for darkmode

interface IDarkModeContext {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
export const DarkModeContext = createContext<IDarkModeContext>(null!)
