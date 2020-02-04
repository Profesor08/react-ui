type ThemeType = "light" | "dark";

interface ITheme {
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  iconPrimary: string;
  iconSecondary: string;
}

type IThemeProvider = {
  [key in ThemeType]: ITheme;
};
