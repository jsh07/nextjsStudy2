'use client'
import { useRouter } from "next/navigation";
export function DetailLink({postId, children}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/detail/${postId}`);
  }
  return (
    <div onClick={handleClick}>{children}</div>
  );
}