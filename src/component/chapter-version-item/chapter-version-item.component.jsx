import "bootstrap/dist/css/bootstrap.min.css";

const ChapterVersionItem = ({ chapterVersionData }) => {
  const { content, status, comment, wordCount } = chapterVersionData;
  return (
    <tr>
      <td>{content}</td>
      <td>{comment}</td>
      <td>{status}</td>
      <td>{wordCount}</td>
    </tr>
  );
};
export default ChapterVersionItem;
