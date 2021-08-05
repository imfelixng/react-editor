import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { MdFormatQuote } from 'react-icons/md';

type Props = {
    editor: Editor
}

const MenuBlockQuote = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdFormatQuote} boxSize={4} />}
                size="xs" variant={editor.isActive('blockquote') ? "solid" : "ghost"}
                colorScheme={editor.isActive('blockquote') ? "blue" : "gray"}
                rounded="full"
                aria-label="Blockquote"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
            />
        </>
    )
};

export default MenuBlockQuote;