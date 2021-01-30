import {
  AppBar,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import provinces from "../../../api/provinces";
import { useContext } from "react";
import { ProvinceFilterContext } from "../../contexts/ProvinceFilterContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      display: "none",
      color: "#66601e",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Navbar() {
  const { province, setProvince } = useContext(ProvinceFilterContext);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Food Finder 🍔
        </Typography>
        <div className={classes.search}>
          <FormControl className={classes.formControl}>
            <Select
              value={province}
              onChange={({ target: { value } }) => setProvince(value as string)}
            >
              {provinces.map((province: string, key: number) => (
                <MenuItem key={key} value={province}>
                  {province}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
}
