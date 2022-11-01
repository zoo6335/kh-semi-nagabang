import axios from "axios";
const HEADER = 'application/json';
const NGB_DOMAIN = "http://localhost:8090/kh_semi_nagabang/";

const RankingApi = {
    // HOT 자유게시판 ranking api
    boardRank: async function () {
        const regCmd = {
            cmd: "BoardRank"
        }
        return await axios.post(NGB_DOMAIN + "BoardRankSevlet", regCmd, HEADER); // 서블릿이름 맞춰줘야해
    },
    // 좋아요순 방탈출 ranking api
    roomRank: async function () {
        const regCmd = {
            cmd: "RoomRank"
        }
        return await axios.post(NGB_DOMAIN + "RoomRankServlet", regCmd, HEADER);
    },
    // HOT 자유게시판 클릭시 보이는 디테일 페이지를 위한 api
    showBoard: async function (postId) {
        const regCmd = {
            cmd: "ShowBoard",
            id: postId
        }
        return await axios.post(NGB_DOMAIN + "ShowBoardServlet", regCmd, HEADER);
    }

}
export default RankingApi;