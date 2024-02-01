import { executeQuery } from "@/util/database"
export default async function Detail(props) {
    let sql = `select * from posts where id = ${props.params.postId}`;
    let result = await executeQuery(sql);
    return (
        <div>
            <h4>상세 페이지</h4>
            <p>{result.title}</p>
            <p>{result.content}</p>
        </div>
    )
}