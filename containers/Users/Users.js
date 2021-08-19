import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/actions";
import UsersWrapper from "./UsersWrapper";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(dispatch);
  }, []);

  const data = useSelector((state) => state.Users);

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <UsersWrapper>
      <h2 className="mb-4">Users</h2>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell> Id </TableCell>
                <TableCell> Name </TableCell>
                <TableCell> UserName </TableCell>
                <TableCell> Email </TableCell>
                <TableCell> Address </TableCell>
                <TableCell> Phone </TableCell>
                <TableCell> Website </TableCell>
                <TableCell> Company </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((v) => (
                <TableRow>
                  <TableCell>{v.id}</TableCell>
                  <TableCell>{v.name}</TableCell>
                  <TableCell>{v.username}</TableCell>
                  <TableCell>{v.email}</TableCell>
                  <TableCell>{v.address}</TableCell>
                  <TableCell>{v.phone}</TableCell>
                  <TableCell>{v.website}</TableCell>
                  <TableCell>{v.company}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          //   count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </UsersWrapper>
  );
};

export default Users;
