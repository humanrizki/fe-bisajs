import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../Components/Editor/Editor";
import 'highlight.js/styles/atom-one-dark.css';
import 'react-quill/dist/quill.snow.css';
import { Delta } from "quill/core";
function DashboardCourses(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);
    const quillRef = useRef();
    const [content, setContent] = useState(null);
    const [delta, setDelta] = useState(null);
    const [text, setText] = useState(null);
    const [image, setImage] = useState(null)
    async function getData(){
        await axios.get('http://be-bisajs.test/api/courses')
        .then(response => {
            setData(response.data.courses)
        })
    }
    useEffect(()=>{
        getData()
        // console.log(data)
        // console.log(content)
        // console.log(text)
        
    },[])
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
        setText={setText}
        setDelta={setDelta}
        setImage={setImage}
      />
      <div className="app-container w-11/12">
        <h1>Preview</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <div className="w-[400px]">{content}</div>
        <hr />
        <div className="w-[400px]">{JSON.stringify(delta)}</div>
      </div>
        </>
    )
}

export default DashboardCourses