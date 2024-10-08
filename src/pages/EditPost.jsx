import { Container } from "postcss";
import { PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import service from "../app/config.service";

const EditPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      service
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate("/all-post");
          }
        })
        .catch((error) => {
          console.log(error);
          navigate("/all-post");
        });
    } else {
      navigate("/all-post");
    }
  }, [slug, navigate]);
  
  if (!post) {
    navigate("/all-post");
  }
  return (
    <div className="py-10">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};
export default EditPost;
