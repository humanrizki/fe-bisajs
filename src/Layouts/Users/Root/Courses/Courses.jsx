// import {
//     // EditorBubble,
//     // EditorBubbleItem,
//     // EditorCommand,
//     // EditorCommandItem,
//     EditorContent,
//     EditorRoot,
// } from "novel";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
function Courses(){
    const [content, setContent] = useState(null);
    const modules = {
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' },
          { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      };
    useEffect(()=>{
        console.log(content)
    },[content])
  return (
    <>
        <div className="flex justify-center items-center h-[10rem]">
        <h1 className="text-6xl font-extrabold">Qull.Js Text Editor</h1>
        

        <ReactQuill 
        className="h-[10rem]" 
        theme='snow'
        formats={['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']}
        placeholder="Write something amazing..."
        onChange={setContent} 
        modules={modules}
        />
        </div>
            <div>
                <h1 className="text-xl font-bold flex justify-center mt-8">Preview</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
    </>
        
        
  )
}

export default Courses