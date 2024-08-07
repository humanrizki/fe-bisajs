import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { Quill } from 'react-quill';
import { TableModule } from 'quill-table';
import hljs from 'highlight.js';
import axios from 'axios';

// 
// Editor is an uncontrolled React component
const Editor = forwardRef(
    ({ readOnly, defaultValue, onTextChange, onSelectionChange, setContent, setText, setDelta, setImage}, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);
    const setContentRef = useRef(setContent);
    const setTextRef = useRef(setText);
    const setDeltaRef = useRef(setDelta);
    const setImageRef = useRef(setImage);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
      setContentRef.current = setContent;
      setTextRef.current = setText;
      setDeltaRef.current = setDelta;
      setImageRef.current = setImage;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );
      Quill.register('modules/table', TableModule);
      const quill = new Quill(editorContainer, {
        theme: 'snow',
        modules: {
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          },
          
          toolbar: {
            container: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
              ['link', 'image', 'video'],
              ['code-block'],
              ['clean'],
              [{ 'table': [] }]
            ],
            handlers: {
              image: ()=>{

                const API_URL = import.meta.env.VITE_API_URL;
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.click();

                input.onchange = async () => {
                  const file = input.files[0];
                  const formData = new FormData();
                  formData.append('image', file);
        
                  try {
                    const response = await axios.post(`${API_URL}/api/upload-image-module`, formData, {
                      headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                    });
        
                    const url = `${API_URL}` + `${response.data.url}`;
                    const range = quill.getSelection();
                    quill.insertEmbed(range.index, 'image', url);
        
                    setImageRef.current(url);
                  } catch (error) {
                    console.error('Image upload failed:', error);
                  }
                };
              }
            },
          },
          table: true,
          
        },
      })

      ref.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }
      
      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
        setContentRef.current?.(quill.root.innerHTML);
        setTextRef.current?.(quill.getText());
        setDeltaRef.current?.(quill.getContents());
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  },
);

Editor.displayName = 'Editor';

export default Editor;

