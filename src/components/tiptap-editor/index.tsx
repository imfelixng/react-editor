import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKitExt from '@tiptap/starter-kit';
import UnderlineExt from '@tiptap/extension-underline';
import HighLightExt from '@tiptap/extension-highlight';
import TextAlignExt from '@tiptap/extension-text-align';

import MenuBar from './menu-bar';
import EditorWrapper from '../common/editor-wrapper';

const TiptapEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKitExt,
            UnderlineExt,
            HighLightExt,
            TextAlignExt.configure({
                types: ['heading', 'paragraph']
            }),
        ],
        content: '<p>Hello World! 🌎️</p>',
        onUpdate: ({ editor }) => {
            const jsonData = editor.getJSON();
            const htmlData = editor.getHTML();

            console.log(jsonData, htmlData);
        },
        onDestroy: () => {
            editor?.destroy()
        },
    });

    return (
        <EditorWrapper
            editorTitle="TIPTAP EDITOR"
            footerComp={(
                <Box bg="gray.100" px={4} py={1} roundedBottom="base">
                    <Text fontSize="sm" color="gray.500">Drag files to insert into editor</Text>
                </Box>
            )}
        >
            <MenuBar editor={editor} />
            <EditorContent
                editor={editor}
                style={{
                    padding: "0.5rem 1rem",
                }}
            />
        </EditorWrapper>
    )
}

export default TiptapEditor