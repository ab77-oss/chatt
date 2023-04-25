import usePosts from "@/hooks/usePosts";
import { Poor_Story } from "@next/font/google";
import PostItem from "./PostItem";

interface PostFeedProps {
    userId?:string;
}

const PostFeed:React.FC<PostFeedProps> = ({
    userId
}) => {
    const {data:posts=[]} = usePosts(userId)
  return (
    <>
    {
        posts.map((post:Record<string, any>) => (
            <PostItem 
                userId={userId}
                key={post.id}
                data={post}
            />
        )
    )}
    
    </>
  );
}

export default PostFeed