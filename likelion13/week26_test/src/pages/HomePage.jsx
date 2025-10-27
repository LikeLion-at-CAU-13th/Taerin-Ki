import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, uploadPost } from "../api";
import { useState } from "react";

function HomePage() {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: 0,
  });

  const uploadPostMutation = useMutation({
    mutationFn: (newPost) => uploadPost(newPost),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        setContent("");
    },
  });

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {username: "codeit", content};
    uploadPostMutation.mutate(newPost);
    
  };

  if (isPending) return "로딩중";

  if (isError) return "에러 발생";

  const posts = postsData?.results ?? [];

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            value={content}
            onChange={handleInputChange}
          />
          <button disabled={uploadPostMutation.isPending || !content} type="submit">
            업로드
          </button>
        </form>
      </div>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.user.name}: {post.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
