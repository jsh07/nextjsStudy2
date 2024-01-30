import { executeQuery } from "@/util/database";
export default async function Home() {
  let getdata = await executeQuery(
    `SELECT * FROM example_table`
  );
  console.log(getdata[0]);
  return (
    <div>
      { getdata[0].name }
    </div>
  );
}
