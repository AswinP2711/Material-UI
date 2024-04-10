import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container, CssBaseline, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { postDelete } from "./postAction";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function PostOptions() {
  const posts = useSelector((posts) => posts);

  const [open, setOpen] = useState(false);
  const [deleteSelected,setDeleteSelected] = useState({});

  const handleClickOpen = (id) => {
    const selectedPost = posts.find((p)=>p.id === id)
    setDeleteSelected(selectedPost)
    setOpen(true);
  };

  const handleClose = () => {
    setDeleteSelected({})
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(postDelete(id));
    setDeleteSelected({})
    setOpen(false);
  };

  console.log(deleteSelected);
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Typography variant="h3" gutterBottom>
          Posts
        </Typography>
        {posts.map((post) => (
          <Grid item xs={8}>
            <Box
              sx={{
                minWidth: 275,
                marginTop: 2,
                // opacity: [0.9, 0.8, 0.7],
                // "&:hover": {
                //   opacity: [1, 1, 1],
                // },
              }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {post.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2">{post.content}</Typography>
                </CardContent>
                <Grid container justifyContent="flex-end">
                  <IconButton
                    aria-label="delete"
                    sx={{ color: "#b71c1c" }}
                    size="large"
                    onClick={() => handleClickOpen(post.id)}
                  >
                    {/*  */}
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    size="large"
                    component={Link}
                    to={`/editpost/${post.id}`}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Card>
            </Box>
          </Grid>
        ))}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Dear {deleteSelected.name}, <br />
              You'll lose all responses collected by this post. We can't recover
              them once you delete.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={() => handleDeleteClick(deleteSelected.id)} autoFocus sx={{ color: "#c62828" }}>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Fragment>
  );
}

export default PostOptions;
