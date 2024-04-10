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
  const initialValues = {
    fullname: "",
    gender: "",
    age: "",
    posttitle: "",
    post: "",
  };

  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({
    fullname: false,
    gender: false,
    age: false,
    posttitle: false,
    post: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e, v) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values, fields) => {
    let errors = {}
    fields.forEach((field) => {
      if (values[field] === "") {
        errors[field] = true;
      } else {
        errors[field] = false;
      }
    });
    return setFormErrors({ ...formErrors, ...errors });
  };

  const onGenderChange = (e, v) => {
    setFormValues({ ...formValues, gender: v.label });
  };

  const handleOnBlur = (e) => {
    validate(formValues, [e.target.name]);
  };

  console.log(formErrors);

  const onSavePostClicked = (e) => {
    e.preventDefault();

    validate(formValues, ["fullname","gender","post","age","posttitle"]);

    if (
      formValues.fullname &&
      formValues.gender &&
      formValues.age &&
      formValues.posttitle &&
      formValues.post
    ) {
      dispatch(postAdded(formValues));
      setFormValues(initialValues);
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
                value={formValues.fullname}
                onChange={handleChange}
                onBlur={(e) => {
                  handleOnBlur(e);
                }}
                error={formErrors.fullname}
                helperText={formErrors.fullname && "Full Name is Required"}
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
                    name="gender"
                    error={formErrors.gender}
                    helperText={formErrors.gender && "Gender is Required"}
                  />
                )}
                value={formValues.gender}
                onChange={onGenderChange}
                onBlur={(e) => {
                  handleOnBlur(e);
                }}
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
                value={formValues.age}
                onChange={handleChange}
                onBlur={(e) => {
                  handleOnBlur(e);
                }}
                error={formErrors.age}
                helperText={formErrors.age && "Age is Required"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="posttitle"
                name="posttitle"
                label="Post Title"
                fullWidth
                variant="standard"
                value={formValues.posttitle}
                onChange={handleChange}
                onBlur={(e) => {
                  handleOnBlur(e);
                }}
                error={formErrors.posttitle}
                helperText={formErrors.posttitle && "Post Title is Required"}
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
                value={formValues.post}
                onChange={handleChange}
                onBlur={(e) => {
                  handleOnBlur(e);
                }}
                error={formErrors.post}
                helperText={formErrors.post && "Post is Required"}
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
