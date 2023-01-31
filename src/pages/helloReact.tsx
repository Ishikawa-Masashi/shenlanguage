import React from "react";
import Layout from "@theme/Layout";

// imoport * as monaco from 'mo'
import Editor from "@monaco-editor/react";
import { HStack, Box } from "@chakra-ui/react";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
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
      </div>
      <HStack>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={(editor) => {
            editor.addCommand(monaco.KeyCode.F9, function () {
              alert("F9 pressed!");
            });
          }}
        />
        <Box>test</Box>
        <Box>test</Box>
      </HStack>
    </Layout>
  );
}
