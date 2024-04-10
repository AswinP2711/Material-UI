import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postAction";
import { useNavigate, useParams } from "react-router";

export default function EditPost() {
  const { postId } = useParams();
  const p = useSelector((reducer) => reducer.post.find((post) => post.id === postId));
  const [postTitle, setPostTitle] = React.useState(p.title);
  const [post, setPost] = React.useState(p.content);

  const [required, setRequired] = React.useState({
    postTitle: false,
    post: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const onPostChange = (e) => {
    setPost(e.target.value);
  };

  const onPostTitleBlur = () => {
    if (postTitle === "") {
      setRequired((required) => ({ ...required, postTitle: true }));
    } else {
      setRequired((required) => ({ ...required, postTitle: false }));
    }
  };

  const onPostBlur = () => {
    if (post === "") {
      setRequired((required) => ({ ...required, post: true }));
    } else {
      setRequired((required) => ({ ...required, post: false }));
    }
  };

  const onSavePostClicked = (e) => {
    e.preventDefault();

    if (postTitle === "") {
      setRequired((required) => ({ ...required, postTitle: true }));
    } else {
      setRequired((required) => ({ ...required, postTitle: false }));
    }

    if (post === "") {
      setRequired((required) => ({ ...required, post: true }));
    } else {
      setRequired((required) => ({ ...required, post: false }));
    }

    if (postTitle && post) {
      dispatch(postUpdated({ id: postId, postTitle, post }));
      setPostTitle("");
      setPost("");
      setRequired({
        postTitle: false,
        post: false,
      });
      navigate("/")
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <br />
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Edit Post
        </Typography>
        <form onSubmit={onSavePostClicked}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="posttitle"
                name="posttitle"
                label="Post Title"
                fullWidth
                variant="standard"
                value={postTitle}
                error={required.postTitle}
                helperText={required.postTitle && "Post Title is Required"}
                onChange={onPostTitleChange}
                onBlur={onPostTitleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Post"
                name="post"
                multiline
                rows={4}
                fullWidth
                value={post}
                error={required.post}
                helperText={required.post && "Post is Required"}
                onChange={onPostChange}
                onBlur={onPostBlur}
              />
            </Grid>
          </Grid>
          <br />
          <Stack direction="row" spacing={50}>
            <Button type="submit" variant="contained" endIcon={<UpgradeIcon />}>
              Update
            </Button>
          </Stack>
        </form>
      </Container>
    </React.Fragment>
  );
}
