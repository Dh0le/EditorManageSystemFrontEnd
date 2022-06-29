import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://66.42.113.23:8080/api/v1/";

// function to create a new chapter version
const createChapterVersion = (chapterId, content) => {
  return axios
    .post(
      API_URL + "author/version",
      {
        chapterId,
        content,
      },
      {
        headers: authHeader(),
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

// TODO: get request with request body
// function to retrieve all chapter versions
const getChapterVersion = (chapterId) => {
  return axios
    .post(
      API_URL + "getVersions",
      {
        chapterId,
      },
      { headers: authHeader() }
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// function to update a chapter version
const updateChapterVersion = (chapterId, comment, status) => {
  return axios
    .put(
      API_URL + "update/version",
      {
        chapterId,
        comment,
        status,
      },
      { headers: authHeader() }
    )
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
