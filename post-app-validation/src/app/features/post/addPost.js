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
import { useNavigate } from "react-router";

export default function AddPost() {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [postTitle, setPostTitle] = React.useState("");
  const [post, setPost] = React.useState("");

  const [required, setRequired] = React.useState({
    name: false,
    gender: false,
    age: false,
    ageMsg: "",
    postTitle: false,
    post: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onNameBlur = () => {
    if (name === "") {
      setRequired((required) => ({ ...required, name: true }));
    } else {
      setRequired((required) => ({ ...required, name: false }));
    }
  };

  const onGenderBlur = () => {
    if (gender === "") {
      setRequired((required) => ({ ...required, gender: true }));
    } else {
      setRequired((required) => ({ ...required, gender: false }));
    }
  };

  const onAgeBlur = () => {
    if (age === "") {
      setRequired((required) => ({ ...required, age: true }));
      setRequired((required) => ({ ...required, ageMsg: "Age is Required" }));
    } else {
      setRequired((required) => ({ ...required, age: false }));
    }
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
    if (name === "") {
      setRequired((required) => ({ ...required, name: true }));
    } else {
      setRequired((required) => ({ ...required, name: false }));
    }

    if (gender === "") {
      setRequired((required) => ({ ...required, gender: true }));
    } else {
      setRequired((required) => ({ ...required, gender: false }));
    }

    if (age === "") {
      setRequired((required) => ({ ...required, age: true }));
      setRequired((required) => ({ ...required, ageMsg: "Age is Required" }));
    } else {
      setRequired((required) => ({ ...required, age: false }));
    }

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

    if (name && gender && age && postTitle && post) {
      dispatch(postAdded(name, gender, age, postTitle, post));
      setName("");
      setAge("");
      setGender("");
      setPostTitle("");
      setPost("");
      setRequired({
        name: false,
        gender: false,
        age: false,
        postTitle: false,
        post: false,
      });
      navigate("/");
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
        <form onSubmit={onSavePostClicked}>
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
                error={required.name}
                helperText={required.name && "Full Name is Required"}
                onChange={onNameChange}
                onBlur={onNameBlur}
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
                    error={required.gender}
                    helperText={required.gender && "Gender is Required"}
                  />
                )}
                value={gender}
                onChange={onGenderChange}
                onBlur={onGenderBlur}
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
                error={required.age}
                helperText={required.age && required.ageMsg}
                onChange={onAgeChange}
                onBlur={onAgeBlur}
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
