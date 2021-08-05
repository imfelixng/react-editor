import React from 'react';
import { Editor } from "@tiptap/react";
import { IconButton, Icon } from '@chakra-ui/react';
import { HiTerminal } from 'react-icons/hi';
import { MdCode } from 'react-icons/md';

type Props = {
    editor: Editor
}

const MenuCode = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdCode} boxSize={4} />}
                size="xs" variant={editor.isActive('code') ? "solid" : "ghost"}
                colorScheme={editor.isActive('code') ? "blue" : "gray"}
                rounded="full"
                aria-label="Code"
                onClick={() => editor.chain().focus().toggleCode().run()}
            />
            <IconButton
                icon={<Icon as={HiTerminal} boxSize={4} />}
                size="xs" variant={editor.isActive('codeBlock') ? "solid" : "ghost"}
                colorScheme={editor.isActive('codeBlock') ? "blue" : "gray"}
                rounded="full"
                aria-label="Code Block"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            />
        </>
    )
};

export default MenuCode;