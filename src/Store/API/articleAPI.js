import { API } from "./API.js";

class ArticleAPI extends API {
    apiUrl = "posts/";
}

const articleAPI = new ArticleAPI();
export default articleAPI;