import {createElement} from "react";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
	palette: {
		action: {
			disabledBackground: "#000000"
		}
	}
});

theme.breakpoints = {
	values: {
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400
	}
};


theme.typography.button = {
	fontFamily: `"Roboto", sans-serif`,
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "16px",
};

theme.typography.h1 = {
	fontFamily: `"Open Sans", sans-serif`,
	fontStyle: "normal",
	fontWeight: "600",
	fontSize: "35px",
	lineHeight: "43px",
	color: "#272835"
};

const ThemeProvider = ({children}) =>
	<MuiThemeProvider theme={theme}>
		{children}
	</MuiThemeProvider>

export default ThemeProvider;