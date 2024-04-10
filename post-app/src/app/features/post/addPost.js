import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { postAdded } from "./postAction";
import { useForm } from "react-hook-form";

export default function AddPost() {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [postTitle, setPostTitle] = React.useState("");
  const [post, setPost] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onGenderChange = (e, v) => {
    setGender(v.label);
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  const onPostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const onPostChange = (e) => {
    setPost(e.target.value);
  };

  const onSavePostClicked = (data) => {
    if (name && gender && age && postTitle && post) {
      dispatch(postAdded(name, gender, age, postTitle, post));
      setName("");
      setAge("");
      setGender("");
      setPostTitle("");
      setPost("");
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <br />
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Add Post
        </Typography>
        <form onSubmit={handleSubmit(onSavePostClicked)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="fullname"
                name="fullname"
                label="Full name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={name}
                {...register("fullname", {
                  required: "First Name is required.",
                })}
                error={Boolean(errors.fullname)}
                helperText={errors.fullname?.message}
                onChange={onNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Options}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Gender"
                    name="sex"
                    {...register("sex", {
                      required: "Gender is required.",
                    })}
                    error={Boolean(errors.sex)}
                    helperText={errors.sex?.message}
                  />
                )}
                value={gender}
                onChange={onGenderChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="age"
                name="age"
                label="Age"
                type="number"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                value={age}
                {...register("age", {
                  required: "Age is required.",
                })}
                error={Boolean(errors.age)}
                helperText={errors.age?.message}
                onChange={onAgeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="posttitle"
                name="posttitle"
                label="Post Title"
                fullWidth
                variant="standard"
                value={postTitle}
                {...register("posttitle", {
                  required: "Post Title is required.",
                })}
                error={Boolean(errors.posttitle)}
                helperText={errors.posttitle?.message}
                onChange={onPostTitleChange}
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
                {...register("post", {
                  required: "Post is required.",
                })}
                error={Boolean(errors.post)}
                helperText={errors.post?.message}
                onChange={onPostChange}
              />
            </Grid>
          </Grid>
          <br />
          <Stack direction="row" spacing={50}>
            <Button type="submit" variant="contained" endIcon={<PostAddIcon />}>
              Post
            </Button>
          </Stack>
        </form>
      </Container>
    </React.Fragment>
  );
}

const Options = [{ label: "Male" }, { label: "Female" }, { label: "Others" }];
