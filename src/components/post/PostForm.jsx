import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../../app/config.service";
import { useCallback, useEffect, useState } from "react";
import { Button, Input, RTE, Select } from "..";

export const PostForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "",
    },
  });
  const user = useSelector((state) => state.auth.user);
const [error, setError] = useState('');
  const navigate = useNavigate();
  const submitPost = async (data) => {
  try {
      if (post) {
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
        if (dbPost) navigate("/all-post");
      } else {
        const file = await service.uploadFile(data.image[0]);
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await service.createPost({
            ...data,
            userId: user.$id,
            status: data.status ? data.status : "active",
          });

          if (dbPost) {
            navigate("/all-post");
          }
        }
      }
  } catch (error) {
    console.log(error);
    setError(error.message)
  }
  };
console.log(error);

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscribtion = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => subscribtion.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        {post ? "Edit Post" : "Create Post"}
      </h2>
      <form onSubmit={handleSubmit(submitPost)} className="flex flex-wrap">
        <div className="w-full md:w-2/3 px-2">
          <Input
            label="Title:"
            placeholder="Title"
            classNames="mb-6"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug:"
            placeholder="Slug"
            classNames="mb-6"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            label="Content:"
            name="content"
            control={control}
            defaultValue={getValues("content")}
            classNames="mb-6"
          />
        </div>
        <div className="w-full md:w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            classNames="mb-6"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-6">
              <img
                src={service.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg w-full object-cover h-48"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            classNames="mb-6"
            {...register("status")}
          />
          <Button
            type="submit"
            classNames={`w-full py-3 rounded-lg text-lg font-semibold text-white ${
              post
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            } transition duration-300`}
          >
            {post ? "Update Post" : "Submit Post"}
          </Button>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
          {errors.image && !post && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};
