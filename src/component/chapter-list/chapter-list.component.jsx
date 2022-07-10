import { useState, useContext, useEffect, Fragment } from "react";

import ChapterItem from "../chapter-item/chapter-item.component";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import ChapterInfo from "../../utils/ChapterInfo";
import ProductItem from "../product-item/product-item.component";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: call chapterList function in product detail page
const ChapterList = ({ currentProduct }) => {
  const [chapters, setChapters] = useState([]);
  // const [localProduct, setLocalProduct] = useState(currentProduct);
  const [header, setHeader] = useState("user is not logged in ");

  useEffect(() => {
    // setLocalProduct(currentProduct);
    ChapterInfo.getAllChapterWithProductInfo(currentProduct).then(
      (response) => {
        setChapters(response);
      }
    );
    //set the page header for the chapter
    setHeader("All chapters for products");
  }, []);

  // useEffect(() => {
  //   setLocalProduct(currentProduct);
  // }, [currentProduct]);

  // useEffect(() => {
  //   console.log("use effect");
  //   if (localProduct) {

  //   }
  // }, [localProduct]);

  useEffect(() => {
    //console.log(products);
  }, [chapters]);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>chapterName</th>
          <th>chapterSub</th>
          <th>chapterStatus</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {chapters != null &&
          chapters.map((chapter) => (
            <ChapterItem chapterItem={chapter} key={chapter.id} />
          ))}
      </tbody>
    </table>
  );
};

export default ChapterList;
