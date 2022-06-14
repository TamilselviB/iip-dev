// material
import MuiAmber from '@material-ui/core/colors/amber';
import MuiBlue from '@material-ui/core/colors/blue';
import MuiGrey from '@material-ui/core/colors/grey';
import MuiTeal from '@material-ui/core/colors/teal';
import MuiPink from '@material-ui/core/colors/pink';
import MuiOrange from '@material-ui/core/colors/orange';

// utils
import { pxToRem, spacing } from '../utils/utils';

// palette

const amber = {
  50: MuiAmber[50],
  100: MuiAmber[100],
  200: MuiAmber[200],
  300: MuiAmber[300],
  400: MuiAmber[400],
  500: MuiAmber[500],
  600: MuiAmber[600],
  700: MuiAmber[700],
  800: MuiAmber[800],
  900: MuiAmber[900],
};

const blue = {
  50: MuiBlue[50],
  100: MuiBlue[100],
  200: MuiBlue[200],
  300: MuiBlue[300],
  400: MuiBlue[400],
  500: MuiBlue[500],
  600: MuiBlue[600],
  700: MuiBlue[700],
  800: MuiBlue[800],
  900: MuiBlue[900],
};

const grey = {
  50: MuiGrey[50],
  100: MuiGrey[100],
  200: MuiGrey[200],
  300: MuiGrey[300],
  400: MuiGrey[400],
  500: MuiGrey[500],
  600: MuiGrey[600],
  700: MuiGrey[700],
  800: MuiGrey[800],
  900: MuiGrey[900],
};

const teal = {
  50: MuiTeal[50],
  100: MuiTeal[100],
  200: MuiTeal[200],
  300: MuiTeal[300],
  400: MuiTeal[400],
  500: MuiTeal[500],
  600: MuiTeal[600],
  700: MuiTeal[700],
  800: MuiTeal[800],
  900: MuiTeal[900],
  A100: MuiTeal.A100,
  A200: MuiTeal.A200,
  A400: MuiTeal.A400,
  A700: MuiTeal.A700,
};

const pink = {
  50: MuiPink[50],
  100: MuiPink[100],
  200: MuiPink[200],
  300: MuiPink[300],
  400: MuiPink[400],
  500: MuiPink[500],
  600: MuiPink[600],
  700: MuiPink[700],
  800: MuiPink[800],
  900: MuiPink[900],
  A100: MuiPink.A100,
  A200: MuiPink.A200,
};

const orange = {
  50: MuiOrange[50],
  100: MuiOrange[100],
  200: MuiOrange[200],
  300: MuiOrange[300],
  400: MuiOrange[400],
  500: MuiOrange[500],
  600: MuiOrange[600],
  700: MuiOrange[700],
  800: MuiOrange[800],
  900: MuiOrange[900],
  A100: MuiOrange.A100,
  A200: MuiOrange.A200,
  A400: MuiOrange.A400,
  A700: MuiOrange.A700,
};

const primary = {
  lightest: '#e0e0e0',
  lighter: '#868585',
  light: '#4D4D4D',
  main: '#090909',
  dark: '#000000',
  contrastText: '#ffffff',
};

const secondary = {
  lightest: blue[50],
  lighter: blue[100],
  light: blue[200],
  main: blue[700],
  dark: blue[900],
  contrastText: '#ffffff',
};

const error = {
  lightest: '#E5425F',
  lighter: '#E5425F',
  light: '#DC0C31',
  main: '#B0001F',
  dark: '#8F0019',
  contrastText: '#ffffff',
};

const success = {
  lightest: '#279179',
  lighter: '#279179',
  light: '#45A18D',
  main: '#0F7E65',
  dark: '#036751',
  contrastText: '#ffffff',
};

const warning = {
  lightest: '#FFCF81',
  lighter: '#FFCF81',
  light: '#E8AE4F',
  main: '#D99423',
  dark: '#AC7010',
  contrastText: '#ffffff',
};

const info = {
  lightest: '#A3CBFA',
  lighter: '#A3CBFA',
  light: '#72AFF8',
  main: '#4A98F6',
  dark: '#2180F2',
  contrastText: '#ffffff',
};

const background = {
  default: 'rgb(39, 39, 62)',
  level1: '#e0e0e0',
  level2: '#eeeeee',
  paper: '#ffffff',
  iipButton: 'rgb(240, 71, 99)',
};

const palette = {
  primary,
  secondary,
  success,
  error,
  warning,
  info,
  background,
  grey,
  blue,
  teal,
  pink,
  orange,
  amber,
};

// breakpoints

const breakpoints = {
  values: {
    xl: 1920,
    lg: 1280,
    md: 960,
    sm: 600,
    xs: 0,
  },
};

// typography

const typography = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: ['Roboto', 'sans-serif'].join(','),
  fontFamilyTerminal: ['Menlo', 'monospace'].join(','),
};

// overrides

const overrides = {
  filepond: {
    root: {
      color: primary.dark,
    },
  },
  MuiAlert: {
    filledSuccess: {
      color: primary.contrastText,
    },
    filledError: {
      color: primary.contrastText,
    },
    filledWarning: {
      color: primary.main,
    },
  },
  MuiAppBar: {
    root: {
      boxShadow: 'none',
      height: `${pxToRem(48)}`,
    },
  },
  // MuiAutocomplete: {
  //   listbox: {
  //     fontSize: pxToRem(12),
  //     fontFamily: typography.fontFamily,
  //     color: primary.light,
  //     textTransform: 'uppercase',
  //   },
  // },
  MuiBadge: {
    colorPrimary: {
      backgroundColor: error.lightest,
    },
  },
  MuiButton: {
    root: {
      padding: `${pxToRem(13)} ${pxToRem(26)}`,
      '&:disabled': {
        backgroundColor: primary.lightest,
      },
      borderRadius: `${pxToRem(4)}`,
    },
    outlinedPrimary: {
      padding: `${pxToRem(12)} ${pxToRem(26)}`,
      border: `${pxToRem(1)} solid ${primary.main}`,
      '&:hover:not(:disabled)': {
        border: `${pxToRem(1)} solid ${primary.main}`,
        backgroundColor: primary.main,
        color: primary.contrastText,
        // reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
          color: primary.main,
        },
      },
      '&:disabled': {
        // remove border and increase padding to compensate in order to keep height at 50px
        border: 'none',
        padding: `${pxToRem(13)} ${pxToRem(27)}`,
      },
    },
    outlinedSecondary: {
      padding: `${pxToRem(12)} ${pxToRem(26)}`,
      border: `${pxToRem(1)} solid ${secondary.main}`,
      '&:hover:not(:disabled)': {
        border: `${pxToRem(1)} solid ${secondary.main}`,
        backgroundColor: secondary.main,
        color: secondary.contrastText,
        // reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
          color: secondary.main,
        },
      },
      '&:disabled': {
        // remove border and increase padding to compensate in order to keep height at 50px
        border: 'none',
        padding: `${pxToRem(13)} ${pxToRem(27)}`,
      },
    },
    contained: {
      boxShadow: 'none',
      '&:disabled': {
        // remove border and increase padding to compensate in order to keep height at 50px
        border: 'none',
        padding: `${pxToRem(13)} ${pxToRem(27)}`,
        backgroundColor: primary.lightest,
      },
    },
    containedPrimary: {
      padding: `${pxToRem(12)} ${pxToRem(26)}`,
      backgroundColor: primary.main,
      border: `${pxToRem(1)} solid ${primary.lighter}`,
      '&:hover:not(:disabled)': {
        border: `${pxToRem(1)} solid ${primary.lighter}`,
        backgroundColor: primary.contrastText,
        color: primary.main,
        // reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: primary.main,
          color: primary.contrastText,
        },
      },
    },
    containedSecondary: {
      padding: `${pxToRem(12)} ${pxToRem(26)}`,
      border: `${pxToRem(1)} solid ${secondary.main}`,
      backgroundColor: secondary.main,
      color: secondary.contrastText,
      '&:hover:not(:disabled)': {
        // reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: secondary.main,
          color: secondary.contrastText,
        },
      },
    },
    textPrimary: {
      color: primary.main,
    },
    textSecondary: {
      color: secondary.main,
    },
    sizeLarge: {
      padding: `${pxToRem(13)} ${pxToRem(39)}`,
    },
  },
  MuiBreadcrumbs: {
    separator: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  MuiCircularProgress: {
    circleIndeterminate: {
      animationDirection: 'reverse',
    },
    indeterminate: {
      animationDirection: 'reverse',
    },
    circle: {
      strokeWidth: '4',
    },
  },
  MuiChip: {
    root: {
      height: pxToRem(32),
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
      letterSpacing: pxToRem(0.25),
      textTransform: 'capitalize',
    },
  },
  MuiContainer: {
    maxWidthLg: {
      [`@media only screen and (min-width: ${pxToRem(breakpoints.values.lg)})`]: {
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
      },
    },
  },
  MUIDataTableHeadCell: {
    fixedHeaderCommon: {
      backgroundColor: primary.lightest,
    },
  },
  MuiDialog: {
    paper: {
      padding: spacing(0),
    },
  },
  MuiDialogActions: {
    root: {
      padding: `${spacing(3)} ${spacing(1.5)} ${spacing(1.5)} ${spacing(1.5)}`,
      justifyContent: 'flex-end',
    },
  },
  MuiDialogContent: {
    root: {
      padding: spacing(3),
      paddingTop: 0,
    },
    dividers: {
      borderTop: 'none',
      padding: `${spacing(1.5)} 0 ${spacing(8)} 0`,
      margin: `0 ${spacing(1.5)}`,
    },
  },
  MuiDialogContentText: {
    root: {
      marginBottom: 0,
    },
  },
  MuiDialogTitle: {
    root: {
      padding: spacing(3),
      fontSize: pxToRem(16),
      fontWeight: '400',
      fontStretch: '300',
      fontStyle: 'normal',
      lineHeight: spacing(1.5),
      letterSpacing: pxToRem(0.15),
      verticalAlign: 'middle',
    },
  },
  MuiDrawer: {
    paper: {
      [`@media only screen and (max-width: ${pxToRem(breakpoints.values.sm)})`]: {
        width: '100%',
      },
      backgroundColor: primary.main,
      color: primary.contrastText,
      padding: 0,
    },
  },
  // MuiFilledInput: {
  //   root: {
  //     borderTopLeftRadius: `${pxToRem(4)}`,
  //     borderTopRightRadius: `${pxToRem(4)}`,
  //   },
  //   underline: {
  //     '&.Mui-disabled:before': {
  //       borderBottomStyle: 'solid !important',
  //     },
  //   },
  // },
  // MuiFormControl: {
  //   root: {
  //     width: '100%',
  //   },
  //   marginNormal: {
  //     marginTop: '0',
  //   },
  // },
  // MuiFormLabel: {
  //   root: {
  //     color: primary.main,
  //     '&.Mui-disabled': {
  //       color: primary.main,
  //     },
  //   },
  //   filled: {
  //     color: primary.main,
  //   },
  // },
  // MuiIconButton: {
  //   colorPrimary: {
  //     color: primary.main,
  //     '&:hover': {
  //       color: secondary.main,
  //     },
  //   },
  // },
  // MuiInputBase: {
  //   input: {
  //     letterSpacing: `${pxToRem(0.15)}`,
  //   },
  // },
  // MuiInputLabel: {
  //   root: {
  //     color: palette.primary.main,
  //   },
  //   filled: {
  //     color: palette.primary.main,
  //   },
  //   shrink: {
  //     color: palette.primary.main,
  //     letterSpacing: `${pxToRem(0.4)}`,
  //   },
  //   formControl: {
  //     color: palette.primary.main,
  //   },
  //   animated: {
  //     color: palette.primary.main,
  //   },
  // },
  MuiLink: {
    root: {
      color: palette.secondary.main,
    },
    underlineHover: {
      textDecoration: 'none',
      paddingBottom: `${pxToRem(1)}`,
      '&:hover': {
        borderBottom: `${pxToRem(1)} solid`,
      },
    },
    underlineAlways: {
      textDecoration: 'none',
      borderBottom: `${pxToRem(0.8)} solid`,
      paddingBottom: `${pxToRem(1)}`,
      '&:hover': {
        color: palette.secondary.dark,
      },
    },
    button: {
      textDecoration: 'none',
      borderBottom: `${pxToRem(0.8)} solid`,
      paddingBottom: `${pxToRem(1)}`,
      '&:hover': {
        color: palette.secondary.dark,
      },
    },
  },
  MuiListItem: {
    root: {
      fontSize: pxToRem(12),
      textTransform: 'uppercase',
      color: primary.light,
      padding: `${spacing(1.625)} ${spacing(1)}`,
      height: pxToRem(32),
      '&$selected': {
        backgroundColor: primary.lightest,
      },
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: spacing(6),
    },
  },
  MuiMenuItem: {
    root: {
      fontSize: pxToRem(12),
      textTransform: 'uppercase',
      padding: `${spacing(1.625)} ${spacing(1)}`,
      height: pxToRem(32),
      '&$selected': {
        backgroundColor: primary.lightest,
      },
    },
  },
  MuiNativeSelect: {
    iconOutlined: {
      right: pxToRem(16),
    },
  },
  // MuiOutlinedInput: {
  //   input: {
  //     paddingLeft: pxToRem(16),
  //     // height should be (at least): 24 + 13 + 13 = 50
  //     minHeight: pxToRem(24),
  //     paddingTop: pxToRem(13),
  //     paddingBottom: pxToRem(13),
  //   },
  //   notchedOutline: {
  //     borderColor: primary.main,
  //   },
  // },
  MuiPaper: {
    root: {
      padding: spacing(2),
    },
    rounded: {
      borderRadius: `${pxToRem(4)}`,
    },
  },
  MuiPickersDay: {
    day: {
      color: primary.light,
    },
    daySelected: {
      backgroundColor: secondary.main,
      color: primary.contrastText,
      '&:hover': {
        backgroundColor: secondary.dark,
      },
    },
    root: {
      fontSize: pxToRem(16),
    },
    current: {
      color: secondary.main,
    },
  },
  MuiPickersMonth: {
    monthSelected: {
      backgroundColor: secondary.light,
      color: primary.contrastText,
      '&:focus': {
        color: primary.contrastText,
      },
    },
    root: {
      fontSize: pxToRem(16),
      '&:focus': {
        color: secondary.dark,
      },
    },
    current: {
      color: secondary.main,
    },
  },
  MuiPickersToolbar: {
    toolbar: {
      backgroundColor: secondary.main,
    },
  },
  MuiPickersToolbarText: {
    toolbarTxt: {
      fontSize: pxToRem(20),
      color: secondary.contrastText,
    },
    toolbarBtnSelected: {
      color: secondary.contrastText,
    },
  },
  MuiPickersYear: {
    yearSelected: {
      backgroundColor: secondary.light,
      color: secondary.contrastText,
      '&:focus': {
        color: secondary.contrastText,
      },
    },
    root: {
      fontSize: pxToRem(16),
      '&:focus': {
        color: primary.main,
      },
    },
    current: {
      color: primary.main,
    },
  },
  MuiPopover: {
    paper: {
      padding: 0,
    },
  },
  // MuiSelect: {
  //   iconOutlined: {
  //     right: pxToRem(16),
  //   },
  //   outlined: {
  //     // allow space for icon which takes up: 24 width + 2 * 16 padding = 56
  //     paddingRight: pxToRem(56),
  //   },
  // },
  MuiSnackbarContent: {
    root: {
      backgroundColor: primary.contrastText,
      color: primary.main,
    },
  },
  MuiTab: {
    root: {
      letterSpacing: `${pxToRem(1.25)}`,
      fontWeight: 500,
      '@media (min-width: 0px)': {
        minWidth: 0,
      },
    },
  },
  MuiTableCell: {
    root: {
      boxSizing: 'border-box',
      padding: spacing(1, 2),
      height: spacing(7),
      maxWidth: spacing(25),
      wordBreak: 'break-word',
      fontSize: pxToRem(13),
    },
    stickyHeader: {
      backgroundColor: background.level2,
    },
    head: {
      backgroundColor: background.level2,
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: primary.main,
      textTransform: 'uppercase',
      fontSize: pxToRem(12),
      lineHeight: pxToRem(12),
      fontWeight: 500,
      letterSpacing: 0,
    },
  },
  MuiTablePagination: {
    toolbar: {
      minHeight: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  MuiTableRow: {
    root: {
      transition: 'all 200ms',
    },
  },
  MuiTableSortLabel: {
    root: {
      alignItems: 'center',
    },
  },
  MuiToggleButton: {
    root: {
      padding: pxToRem(5),
      color: primary.light,
      backgroundColor: background.paper,
      fontWeight: 500,
      height: pxToRem(32),
      /*
      unset hard-coded height:
      https://github.com/mui-org/material-ui/blob/0fe179724d345f20a10975a5e291fc40b439549d/packages/material-ui-lab/src/ToggleButton/ToggleButton.js#L16
      material-ui uses jss-nested plugin for increasing specifity which follows syntax defined on below link:
      https://github.com/cssinjs/jss-nested#use--to-reference-selector-of-the-parent-rule
      */
      '&$selected': {
        backgroundColor: background.paper,
        color: secondary.main,
        border: `1px ${secondary.main} solid`,
        '&:hover': {
          backgroundColor: secondary.dark,
          color: secondary.contrastText,
        },
      },
      '&$disabled': {
        color: primary.lightest,
      },
    },
    selected: {},
    disabled: {},
  },
  MuiToggleButtonGroup: {
    grouped: {
      height: pxToRem(32),
      '&:first-child': {
        borderRadius: `${pxToRem(4)} ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(4)}`,
      },
      '&:last-child': {
        borderRadius: `${pxToRem(0)} ${pxToRem(4)} ${pxToRem(4)} ${pxToRem(0)}`,
      },
    },
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderLeft: `${pxToRem(1)} solid ${secondary.main}`,
      },
    },
  },
  MuiTypography: {
    h1: {
      fontWeight: 400,
      fontSize: pxToRem(48),
      lineHeight: pxToRem(58),
    },
    h2: {
      fontWeight: 400,
      fontSize: pxToRem(20),
      lineHeight: pxToRem(20),
    },
    h3: {
      fontWeight: 500,
      fontSize: pxToRem(18),
      lineHeight: pxToRem(28),
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(26),
    },
    h5: {
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(26),
    },
    h6: {
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(26),
    },
    body1: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(24),
    },
    body2: {
      fontSize: pxToRem(13),
      lineHeight: pxToRem(23),
      color: palette.grey[600],
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: pxToRem(9),
      lineHeight: pxToRem(19),
      color: palette.grey[600],
    },
  },
};

export default {
  palette,
  typography,
  breakpoints,
};
