import { executeQuery } from "@/util/database";

export default async function List() {

  let sql = "select * from posts";
  let result = await executeQuery(sql);
  console.log(result[0].title);

  return (
    <div className="list-bg">
      {
        result.map((item) => {
          return(
          <div className="list-item">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
          );
        })
      }

    </div>
  );
}