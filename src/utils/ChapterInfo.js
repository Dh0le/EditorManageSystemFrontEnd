import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://66.42.113.23:8080/api/v1/";

//function to get all chapter for a given product
const getAllChapterWithProductInfo = ({ id, productName }) => {
  console.log(id, productName);
  return axios
    .post(
      API_URL + "getChapters",
      {
        productId: id,
        productName: productName,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};

//function to get all chapter with given id
const getAllChapterWithGivenId = (Id, chapterId) => {
  return axios
    .post(API_URL + "getChapter", {
      params: {
        id: Id,
        chapterId: chapterId,
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

//function for author to create a chapter
const createChapter = (productId, chapterName) => {
  return axios
    .post(
      API_URL + "author/chapter",
      { productId, chapterName },
      { headers: authHeader() }
    )
    .catch((error) => {
      console.log(error);
    });
};

//function for author to update the chapter
const authorUpdateChapter = ({
  id,
  authorId,
  chapterName,
  chapterStatus,
  totalSub,
  finalVersionId,
}) => {
  return axios
    .put(
      API_URL + "admin/chapter",
      {
        id,
        authorId,
        chapterName,
        chapterStatus,
        totalSub,
        finalVersionId,
      },
      { headers: authHeader() }
    )
    .catch((error) => {
      console.log(error);
    });
};

const editorUpdateChapter = ({
  id,
  editorId,
  chapterName,
  chapterStatus,
  finalVersionId,
}) => {
  return axios
    .put(
      API_URL + "editor/chapter",
      {
        id,
        editorId,
        chapterName,
        chapterStatus,
        finalVersionId,
      },
      { headers: authHeader() }
    )
    .catch((error) => {
      console.log(error);
    });
};

const managerUpdateChapter = ({
  id,
  authorId,
  chapterName,
  chapterStatus,
  totalSub,
  finalVersionId,
}) => {
  return axios
    .put(
      API_URL + "admin/chapter",
      {
        id,
        authorId,
        chapterName,
        chapterStatus,
        totalSub,
        finalVersionId,
      },
      { headers: authHeader() }
    )
    .catch((error) => {
      console.log(error);
    });
};

const ChapterInfo = {
  getAllChapterWithProductInfo,
  getAllChapterWithGivenId,
  createChapter,
  authorUpdateChapter,
  editorUpdateChapter,
  managerUpdateChapter,
};
export default ChapterInfo;
