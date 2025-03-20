"use client";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  styled,
  Pagination,
  Skeleton,
} from "@mui/material";
import { Edit, Delete, PersonAdd, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEditorAction,
  getDeleteEditorAction,
} from "@/store/slices/EditorSlice";
import { color } from "@mui/system";
import { useSnackbar } from "notistack";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function EditorManagemantTable({
  onEdit,
  onRemove,
  loading = false,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const { editorData, isLoadingEditor, isErrorEditor } = useSelector(
    (state) => state.editorData
  );

  useEffect(() => {
    dispatch(getAllEditorAction())
      .unwrap()
      .then((data) => {
        enqueueSnackbar("Editor data load Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar("Error occure", { variant: "error" });
      });
  }, []);
  const filteredAdmins = [...(editorData || [])] // Create a shallow copy to avoid mutation
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by latest first
    .filter(
      (admin) =>
        admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedAdmins = filteredAdmins?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleEdit = (editor) => {
    const params = new URLSearchParams(window.location.search);
    params.set("editId", editor._id); // Set editeditorId
    params.delete("deleteId"); // Ensure deleteeditorId is removed
    router.push(`/admin/add-editor?${params.toString()}`, { scroll: false });
  };
  const handleDelete = (editorId) => {
    const params = new URLSearchParams(window.location.search);
    params.set("deleteId", editorId); // Set deleteAdminId
    params.delete("editId"); // Ensure editAdminId is removed
    router.push(`?${params.toString()}`, { scroll: false });
    dispatch(getDeleteEditorAction(editorId))
      .unwrap()
      .then((res) => {
        if (res) {
          dispatch(getAllEditorAction());
          enqueueSnackbar("Editor delete sucessfuly", { variant: "success" });
          params.delete("deleteAdminId");
        } else {
          enqueueSnackbar("Error occure", { variant: "error" });
        }
      })
      .catch((error) => {
        enqueueSnackbar(error, { variant: "error" });
      });
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            Editor Management
          </Typography>
        }
        action={
          <Button
            variant="contained"
            onClick={() => router.push("/admin/add-editor")}
            startIcon={<PersonAdd />}
            sx={{ borderRadius: "20px", backgroundColor: "blue" }}
          >
            New Editor
          </Button>
        }
      />
      <CardContent>
        <TextField
          fullWidth
          placeholder="Search editor....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{ startAdornment: <Search /> }}
          sx={{ mb: 3 }}
        />
        {isLoadingEditor && <LinearProgress sx={{ mb: 2 }} />}

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Editor
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Role
                </TableCell>
                <TableCell
                  sx={{ width: "200px", fontWeight: 600, textAlign: "center" }}
                >
                  Joined
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ width: "200px", textAlign: "center" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoadingEditor && editorData?.length === 0
                ? [...Array(10)].map((_, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Skeleton variant="circular" width={36} height={36} />
                          <Skeleton variant="text" width={100} height={20} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="text" width={150} height={20} />
                      </TableCell>
                      <TableCell>
                        <Skeleton
                          variant="rectangular"
                          width={80}
                          height={24}
                        />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant="text" width={100} height={20} />
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex items-center justify-end gap-2">
                          <Skeleton variant="circular" width={32} height={32} />
                          <Skeleton variant="circular" width={32} height={32} />
                        </div>
                      </TableCell>
                    </StyledTableRow>
                  ))
                : paginatedAdmins.map((editor) => (
                    <StyledTableRow key={editor._id}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Avatar
                            src={editor?.imageBase64}
                            sx={{ width: 36, height: 36 }}
                          >
                            {editor.name.charAt(0)}
                          </Avatar>
                          <Typography sx={{ textAlign: "center" }}>
                            {editor.name}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {editor.email}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip label={editor.authType} variant="outlined" />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {new Date(editor.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit(editor)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(editor._id)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
          {editorData.length === 0 && (
            <div className="text-center text-[30px]">No Editor Found</div>
          )}
        </TableContainer>

        <Pagination
          count={Math.ceil(filteredAdmins?.length / rowsPerPage) || 1}
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 3, display: "flex", justifyContent: "center" }}
        />
      </CardContent>
    </Card>
  );
}
