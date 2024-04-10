import { Fragment } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

function PostList() {
  const posts = useSelector((posts) => posts);
  return (
    <Fragment>
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <h1>Posts</h1>
        {posts.map((post) => (
          <Grid item xs={8}>
            <Box
              sx={{
                minWidth: 275,
                marginTop: 2,
                opacity: [0.9, 0.8, 0.7],
                "&:hover": {
                  opacity: [1, 1, 1],
                },
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
              </Card>
            </Box>
          </Grid>
        ))}
      </Container>
    </Fragment>
  );
}

export default PostList;
