import { useMemo } from "react";
import useEventList from "../hooks/useEventList";
import "./home.css";

const TOTAL_PAGE = 37;
const currentPage = 4;
const POST_LIMIT = 1;
const PAGE = Math.ceil(TOTAL_PAGE / POST_LIMIT);

export default function Home() {
  const array = Array.from({ length: TOTAL_PAGE }, (_, index) => index + 1);
  const firstNum = currentPage - (currentPage % 5) + 1;
  const lastNum = currentPage - (currentPage % 5) + 5;
  console.log(firstNum, lastNum);
  const a = array.slice(firstNum - 1, lastNum);
  console.log(a);

  // let temp = [];
  // for (let i = 0; i <= TOTAL_PAGE; i += POST_LIMIT) {
  //   temp.push(array.slice(i, i + POST_LIMIT));
  // }
  // console.log(
  //   currentPage - (currentPage % 5) + 1,
  //   currentPage - (currentPage % 5) + 5,
  //   temp
  //   // currentPage % POST_LIMIT,
  //   // (currentPage % POST_LIMIT) / POST_LIMIT,
  //   // temp[Math.floor((currentPage % POST_LIMIT) / POST_LIMIT)]
  // );

  const { data } = useEventList();

  if (!data) {
    return null;
  }

  const mapedData = data.data.map(({ body, userId, id, title }) => (
    <li key={id} className="list">
      <div>{userId}</div>
      <div>{title}</div>
      <div>{body}</div>
      <button type="button">버튼</button>
    </li>
  ));

  return <ul>{mapedData}</ul>;
}
