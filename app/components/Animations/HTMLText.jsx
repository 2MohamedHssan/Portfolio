"use client";

import React, { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";

function CodeBlock({ title, code, language }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  if (!code) return null;

  const handleCopy = () => {
    const text = codeRef.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 700);
    });
  };

  return (
    <div className="rounded-md overflow-hidden border border-neutral-700 bg-neutral-900 mt-6">
      <div className="flex justify-between items-center bg-neutral-800 px-4 py-2 text-sm font-semibold">
        <span>{title}</span>
        <button onClick={handleCopy} className="text-gray-200">
          {copied ? "Copied!" : <FaCopy size={16} />}
        </button>
      </div>
      <pre
        ref={codeRef}
        className="max-h-96 text-amber-600 text-sm overflow-auto p-3 whitespace-pre-wrap"
      >
        {code}
      </pre>
    </div>
  );
}

export default function CodeSnippet({ htmlCode, cssCode, jsCode }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <CodeBlock title="HTML" code={htmlCode} language="html" />
      <CodeBlock title="CSS" code={cssCode} language="css" />
      {jsCode && <CodeBlock title="JavaScript" code={jsCode} language="js" />}
    </div>
  );
}
