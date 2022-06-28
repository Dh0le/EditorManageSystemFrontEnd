import { useState, useContext, useEffect, Fragment } from "react";
import { ProductDetailContainer } from "./product-detail.style";
import ChapterItem from "../chapter-item/chapter-item.component";
import { UserContext } from "../../context/user-context";
import AuthService from "../../utils/AuthService";
import ChapterInfo from "../../utils/ChapterInfo";

const ProductDetail = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [chapters, setChapters] = useState([]);
  const [header, setHeader] = useState("user is not logged in ");

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  useEffect(
    ({ currentProduct }) => {
      if (currentUser) {
      } else {
        // if the current user is null, which means the website is in a logged out status
        // so we reset all these status to false
        console.log("current user is not logged in ");
      }
    },
    [currentUser]
  );

  return (
    <Fragment>
      <ProductDetailContainer>
        <div>{/*TODO:show product infor*/}</div>
        <div>{/*TODO:button to edit the info */}</div>
      </ProductDetailContainer>
    </Fragment>
  );
};

export default ProductDetail;
