import axios from "axios";
const HEADER = 'application/json';
const NGB_DOMAIN = "http://localhost:8090/kh_semi_nagabang/";

const RankingApi = {
    boardRank: async function() {
        const regCmd = {
            cmd : "BoardRank"
        }
        return await axios.post(NGB_DOMAIN + "RankingServlet", regCmd, HEADER);
    }
}

export default RankingApi;