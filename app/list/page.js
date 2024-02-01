import { DetailLink } from "@/link/DetailLink";
import { executeQuery } from "@/util/database";
import Link from "next/link";

export default async function List() {

  let sql = "select * from posts";
  let result = await executeQuery(sql);
  return (
    <div className="list-bg">
      {
        result.map((post, i) => {
          return(
          <div className="list-item" key={i}>
            <DetailLink postId={post.id}>
              <h4>{post.title}</h4>
            </DetailLink>
            <p>{post.content}</p>
          </div>
          );
        })
      }

    </div>
  );
}