import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://66.42.113.23:8080/api/v1/";

// function to create a new chapter version
const createChapterVersion = (chapterId, content) => {
  return axios
    .post(API_URL + "author/version", {
      headers: authHeader(),
      chapterId,
      content,
    })
    .catch((error) => {
      console.log(error);
    });
};

// function to retrieve all chapter versions
const getChapterVersion = (chapterId) => {
  return axios
    .get(API_URL + "versions", { headers: authHeader(), chapterId })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// function to update a chapter version
const updateChapterVersion = (chapterId, comment, status) => {
  return axios
    .put(API_URL + "update/version", {
      headers: authHeader(),
      chapterId,
      comment,
      status,
    })
    .catch((error) => {
      console.log(error);
    });
};

const ChapterVersionService = {
  createChapterVersion,
  updateChapterVersion,
  getChapterVersion,
};

export default ChapterVersionService;
