import { useState, useContext, useEffect, Fragment } from "react";

import ChapterItem from "../chapter-item/chapter-item.component";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import ChapterInfo from "../../utils/ChapterInfo";
import ProductItem from "../product-item/product-item.component";

// TODO: call chapterList function in product detail page
const ChapterList = ({ currentProduct }) => {
  const { ProductInfo, setProductInfo } = useContext(UserContext);
  const [chapters, setChapters] = useState([]);
  const [header, setHeader] = useState("user is not logged in ");

  useEffect(() => {
    ChapterInfo.getAllChapterWithProductInfo(
      currentProduct.productId,
      currentProduct.productName
    ).then((response) => {
      //console.log(response);
      setChapters(response);
    });
    //set the page header for the chapter
    setHeader("All chapters for products");
  });
  return (
    <table className="chapter list component">
      <thead>
        <tr>
          <th>chapterName</th>
          <th>chapterSub</th>
          <th>chapterStatus</th>
        </tr>
      </thead>
      <tbody>
        {chapters != null &&
          chapters.map((chapter) => (
            <ChapterItem chapterItem={chapter} key={chapter.chapterName} />
          ))}
      </tbody>
    </table>
  );
};

export default ChapterList;
