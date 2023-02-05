import React from "react";
import Layout from "@theme/Layout";

// imoport * as monaco from 'mo'
import Editor, { Monaco } from "@monaco-editor/react";
import { HStack, Box } from "@chakra-ui/react";
import { shen } from "@ishikawa-masashi/shenscript";

// import type * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default function Hello() {
  React.useEffect(() => {
    const asyncCallback = async () => {
      const $ = await shen();
      $.exec("(+ 1 1)").then(console.log);
    };
    asyncCallback();
  }, []);

  return (
    <Layout title="Hello" description="Hello React Page">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div> */}
      <HStack padding="24px">
        <Editor
          height="40vh"
          width="50%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={(editor) => {
            editor.addCommand(monaco.KeyCode.F5, () => {
              const selection = editor.getSelection();
              console.log(selection);
              alert("F5 pressed!");
            });
          }}
        />
        <Box>test</Box>
      </HStack>
    </Layout>
  );
}
