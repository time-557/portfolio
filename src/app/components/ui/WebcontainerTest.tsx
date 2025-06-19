"use client";

import { useEffect, useState } from "react";
import { WebContainer } from "@webcontainer/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function FileEditorPage() {
  const [wcInstance, setWcInstance] = useState<any>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    WebContainer.boot().then((inst) => setWcInstance(inst));
  }, []);

  const getLanguage = (filename: string): string => {
    const ext = filename.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "js":
      case "jsx":
        return "javascript";
      case "ts":
      case "tsx":
        return "typescript";
      case "json":
        return "json";
      case "py":
        return "python";
      case "html":
        return "html";
      case "css":
        return "css";
      case "md":
        return "markdown";
      case "sh":
        return "bash";
      case "py":
        return "python";
      default:
        return "text"; // fallback
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !wcInstance) return;

    const content = await file.text();
    const virtualPath = `/uploaded-${file.name}`;

    await wcInstance.fs.writeFile(virtualPath, content);

    setFileName(file.name);
    setFileContent(content);
  };

  const handleClear = async () => {
    if (fileName && wcInstance) {
      const virtualPath = `/uploaded-${fileName}`;
      try {
        await wcInstance.fs.rm(virtualPath);
      } catch (err) {
        console.warn("File not found in FS:", virtualPath);
      }
    }

    setFileName("");
    setFileContent("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-6">
      <Card className="w-full max-w-3xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Mini File Viewer with Highlighting</h1>

        <p>
          Status:{" "}
          {wcInstance ? (
            <span className="text-green-600">✅ Ready</span>
          ) : (
            <span className="text-orange-600">⏳ Booting...</span>
          )}
        </p>

        <Input type="file" onChange={onFileChange} />

        {fileContent && (
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Viewing: {fileName}</h2>
            <div className="rounded-md border overflow-auto max-h-[500px]">
              <SyntaxHighlighter
                language={getLanguage(fileName)}
                style={oneDark}
                customStyle={{
                  fontSize: "0.9rem",
                  fontFamily: "monospace",
                  padding: "1rem",
                  margin: 0,
                  background: "transparent",
                }}
                showLineNumbers
              >
                {fileContent}
              </SyntaxHighlighter>
            </div>
            <div className="flex gap-4 mt-2">
              <Button onClick={() => navigator.clipboard.writeText(fileContent)}>
                Copy to clipboard
              </Button>
              <Button variant="destructive" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
