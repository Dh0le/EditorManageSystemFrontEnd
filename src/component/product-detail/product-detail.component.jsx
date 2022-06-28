import { useState, useContext, useEffect, Fragment } from "react";
import { ProductDetailContainer } from "./product-detail.style";
import ChapterItem from "../chapter-item/chapter-item.component";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";

const ProductDetail = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [chapters, setProducts] = useState([]);
  const [header, setHeader] = useState("user is not logged in ");

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  useEffect(() => {
    //console.log(products);
  }, [chapters]);

  return (
    <Fragment>
      <ProductDetailContainer>
        <div>{/*show product infor*/}</div>
        <div>{/*button to edit the info */}</div>
      </ProductDetailContainer>

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
    </Fragment>
  );
};

export default ProductDetail;
