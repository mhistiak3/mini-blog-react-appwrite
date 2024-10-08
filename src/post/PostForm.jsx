import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../app/config.service";

export const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "",
      },
    });
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const submitPost = async (data) => {
    if (post) {
      // update post
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        await service.deleteFile(post.featuredImage);
      }
      const updatedPost = {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      };
      const dbPost = await service.updatePost(post.$id, updatedPost);
      if (dbPost) {
        navigate("/all-post");
      }
    } else {
      // Create post
      const file = await service.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({ ...data, userId: user.$id });
        if (dbPost) {
          navigate("/all-post");
        }
      }
    }
  };

  return <div>PostForm</div>;
};
