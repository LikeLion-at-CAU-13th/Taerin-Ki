import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getPosts, getPostsByUsername, uploadPost } from "../api";
import Post from "./Post";
import { FEED_VARIANT } from "../values";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import PostForm from "./PostForm";

function PostList({ variant = FEED_VARIANT.HOME_FEED, showPostForm }) {
  const queryClient = useQueryClient();

  // variant 값에 따라 동적으로 설정
  let postsQueryKey;
  let postsQueryFn;
  
  const currentUsername = "codeit";

  if (variant === FEED_VARIANT.HOME_FEED) {
    postsQueryKey = ["posts"]; // 전체 피드 (홈)
    postsQueryFn = getPosts;
  } else if (variant === FEED_VARIANT.MY_FEED) {
    postsQueryKey = ["posts", currentUsername]; // 내 피드
    postsQueryFn = () => getPostsByUsername(currentUsername);
  }

  const { data: postsData, isLoading, isError } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });

  // useMutation으로 포스트 업로드 처리
  const uploadPostMutation = useMutation({
    mutationFn: uploadPost,
    onSuccess: () => {
      // 업로드 성공시 posts 관련 모든 쿼리를 무효화하여 자동 갱신
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast("포스트가 성공적으로 업로드 되었습니다!");
    },
    onError: (error) => {
      toast.error(`업로드에 실패했습니다: ${error.message}`);
    },
  });

  const handleUploadPost = (newPost) => {
    uploadPostMutation.mutate(newPost);
  };

  // 로딩-에러 처리
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  const posts = postsData?.results ?? [];

  return (
    <ListContainer>
      {showPostForm ? (
        <PostForm
          onSubmit={handleUploadPost}
          // 업로드 중에는 버튼 비활성화
          buttonDisabled={uploadPostMutation.isLoading}
        />
      ) : (
        ""
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;
