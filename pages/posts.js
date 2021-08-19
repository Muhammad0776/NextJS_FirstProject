import Dashboard from "../containers/Dashboard";
import PostsData from "../containers/Posts";

const Posts = () => {
  return (
    <div>
      <Dashboard menu={"posts"}>
        <PostsData />
      </Dashboard>
    </div>
  );
};

export default Posts;
