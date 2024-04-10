const initialState = [
  {
    name: "Aswin P",
    id: "1",
    title: "Duis sit amet laoreet ex",
    content:
      "Aliquam eros diam, viverra vel felis sed, gravida dignissim risus. Nam ante augue, sodales ut tellus non, commodo maximus nisl. Ut eget leo urna. Ut mi augue, efficitur ut lorem vitae, condimentum placerat nibh. Duis semper felis urna, nec mattis lectus ultricies vitae. Fusce commodo purus sit amet leo faucibus, sit amet blandit mi semper. In dapibus est vel nisl mollis laoreet. Vestibulum non nulla luctus, ultrices neque euismod, interdum enim. Nam at libero est. Aenean at mi commodo, feugiat velit non, porttitor sem. In hac habitasse platea dictumst. Integer eget mauris sed leo maximus maximus at sit amet nibh. Curabitur auctor turpis at nibh cursus euismod. Suspendisse fermentum orci id fermentum placerat.Etiam ipsum eros, porta eu commodo id, cursus nec augue. Morbi velit orci, scelerisque et condimentum sed, pharetra vitae leo. Pellentesque ut gravida diam, sit amet tincidunt justo. Nunc efficitur orci ac accumsan condimentum. Vivamus a rutrum est. Sed facilisis dolor erat, a iaculis ex auctor ut. Mauris nec rutrum nisi. Nunc vel diam sit amet enim sollicitudin commodo et id turpis. Donec ac maximus turpis. Nullam egestas, felis a ornare imperdiet, ante nunc tempus sapien, sit amet semper ligula lacus quis velit. Sed ante odio, congue vitae sem vel, dapibus sollicitudin dui. Morbi auctor pretium nunc, sed elementum est rhoncus ut. Ut sed urna pulvinar, imperdiet quam ut, efficitur felis.",
    gender: "Male",
    age: "20",
  },
  {
    name: "Aiswarya P",
    id: "2",
    title: "Vestibulum vel placerat odio",
    content:
      "Nunc congue, felis ac facilisis scelerisque, massa nulla consequat purus, quis vestibulum nisi libero et purus. Mauris non efficitur purus, sit amet volutpat ligula. Vestibulum euismod dignissim turpis, vel sagittis felis accumsan accumsan. Pellentesque ornare hendrerit fermentum. Suspendisse non placerat justo, eu luctus dui. Vivamus ultricies id tellus nec malesuada. Proin ut erat sem. Nam hendrerit porta ex ac eleifend. Praesent tincidunt eros nec enim ullamcorper lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae ligula a leo blandit cursus ut non justo. Donec fermentum lorem libero, sed euismod libero cursus eget. Maecenas ut odio mauris. Maecenas interdum eu quam id pulvinar. Integer sagittis dictum erat ut auctor. Suspendisse finibus congue orci quis molestie.",
    gender: "Female",
    age: "23",
  },
];

function postReducer(posts = initialState, action) {
  switch (action.type) {
    case "POSTADDED":
      return [...posts, action.payload];
    case "POSTUPDATED":
      const { id, postTitle, post } = action.action;
      const existingPost = posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = postTitle;
        existingPost.content = post;
      }
      return posts;
    case "POSTDELETED":
      posts = posts.filter((p)=>p.id !== action.postId);
      return [...posts];
    default:
      return posts;
  }
}

export default postReducer;
