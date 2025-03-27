
import { Fonts, themeProps } from '@ssupat/components'
import { extendTheme, ThemeProvider } from '@chakra-ui/react'
const theme = extendTheme(themeProps)

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <Fonts />
            {children}
        </ThemeProvider>
    )
}   
