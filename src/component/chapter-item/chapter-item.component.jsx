import { Link } from "react-router-dom";

const ChapterItem = ({ chapterItem }) => {
  const { id, chapterName, chapterSub, chapterStatus, finalVersionId } =
    chapterItem;

  return (
    <tr>
      <td>{chapterName}</td>
      <td>{chapterSub}</td>
      <td>{chapterStatus}</td>
      <td>
        <Link to={`/chapter/${id}`} state={chapterItem}>
          Chapter Detail
        </Link>
      </td>
    </tr>
  );
};

export default ChapterItem;
