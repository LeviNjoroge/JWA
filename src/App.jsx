import Chatbot from "./Chatbot";
import "./index.css";

function App(){

  return(
    <div className="iframe-wrapper">
      <iframe
                src="https://app.livechatai.com/aibot-iframe/cmj16s98x0003la04nknd6auw"
                className="scaled-iframe"
                allowFullScreen="yes"
                frameBorder="0"
                allow="microphone"
                ></iframe>
    </div>
  );
}

export default App;