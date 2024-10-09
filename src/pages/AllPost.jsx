import { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import service from "../app/config.service";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/posts.slice";

const AllPost = () => {
  const dispatch = useDispatch()
  // const [posts, setPosts] = useState([]);
  const posts = useSelector(state => state.posts.posts)

  useEffect(() => {
    service
      .getPosts()
      .then((posts) => {
        if (posts) {
          // setPosts(posts.documents);
          dispatch(getPosts({ posts: posts.documents }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


console.log(posts);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          All Posts
        </h1>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post.$id}
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
                author={post.author}
                createdAt={post.$createdAt}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl">
            No posts available. Please check back later.
          </p>
        )}
      </Container>
    </div>
  );
};

export default AllPost;
