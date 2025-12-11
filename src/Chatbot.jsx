import { useEffect } from "react";

function Chatbot() {
    useEffect(() => {
        // Check if the script is already loaded
        if (!document.getElementById("livechatai-script")) {
            const script = document.createElement("script");
            script.id = "livechatai-script";
            script.src = "https://app.livechatai.com/embed.js";
            script.defer = true;
            script.setAttribute("data-id", "cmj16s98x0003la04nknd6auw");
            document.body.appendChild(script);
        }
    }, []);

    return null;
}

export default Chatbot;