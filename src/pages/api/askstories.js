import withDIcontainer from "../../withDIcontainer.js";
import handler from "../../interfaces/http/api/askstories.js";
// DIcontiner の injection だけしてあとの処理は移譲する
export default withDIcontainer(handler);
