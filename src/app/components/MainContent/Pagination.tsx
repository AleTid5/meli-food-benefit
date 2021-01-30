import { makeStyles } from "@material-ui/core/styles";
import { BaseComponentProps } from "@material-ui/data-grid";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export default function CustomPagination({ state, api }: BaseComponentProps) {
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      color="primary"
      page={state.pagination.page}
      count={state.pagination.pageCount}
      onChange={(_e, value) => api.current.setPage(value)}
    />
  );
}
