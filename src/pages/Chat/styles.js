import { createGlobalStyle } from "styled-components";

const ChatStyle = createGlobalStyle`
  
    .chatBox{
        background-color:#fff;
        color:#000;
        padding: 5px;
        margin:5px;
      }

      .chatBoxLeft {
        float:left;
      }

      .chatBoxRight{
        float:right;
      }
      
`;

export default ChatStyle