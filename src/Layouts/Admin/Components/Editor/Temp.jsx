// import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
// import hljs from "highlight.js";
// import 'highlight.js/styles/default.css';
import 'highlight.js/styles/atom-one-dark.css';
import React, { useEffect, useRef, useState } from 'react';
import Editor from './Editor';
import { Delta } from 'quill/core';
function Temp(){
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef();
  const [content, setContent] = useState(null);
  useEffect(()=>{console.log(content)}, [content])
  return (
    <>
      <Editor
        ref={quillRef}
        readOnly={readOnly}
        defaultValue={new Delta()
          .insert('Hello')
          .insert('\n', { header: 1 })
          .insert('Some ')
          .insert('initial', { bold: true })
          .insert(' ')
          .insert('content', { underline: true })
          .insert('\n')}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
        setContent={setContent}
      />
      <div className="app-container w-1/2">
        <h1>Preview</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  )
}

export default Temp
