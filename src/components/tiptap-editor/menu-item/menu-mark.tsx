import React from 'react';

import { IconButton, Icon } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { BiHighlight } from 'react-icons/bi';
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdFormatStrikethrough } from 'react-icons/md';

type Props = {
    editor: Editor
}

const MenuMark = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdFormatBold} boxSize={4} />}
                size="xs" variant={editor.isActive('bold') ? "solid" : "ghost"}
                colorScheme={editor.isActive('bold') ? "blue" : "gray"}
                rounded="full"
                aria-label="Bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
            />
            <IconButton
                icon={<Icon as={MdFormatItalic} boxSize={4} />}
                size="xs" variant={editor.isActive('italic') ? "solid" : "ghost"}
                colorScheme={editor.isActive('italic') ? "blue" : "gray"}
                rounded="full"
                aria-label="Italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
            />
            <IconButton
                icon={<Icon as={MdFormatUnderlined} boxSize={4} />}
                size="xs" variant={editor.isActive('underline') ? "solid" : "ghost"}
                colorScheme={editor.isActive('underline') ? "blue" : "gray"}
                rounded="full"
                aria-label="Underline"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
            />
            <IconButton
                icon={<Icon as={MdFormatStrikethrough} boxSize={4} />}
                size="xs" variant={editor.isActive('strike') ? "solid" : "ghost"}
                colorScheme={editor.isActive('strike') ? "blue" : "gray"}
                rounded="full"
                aria-label="Strike"
                onClick={() => editor.chain().focus().toggleStrike().run()}
            />
            <IconButton
                icon={<Icon as={BiHighlight} boxSize={4} />}
                size="xs" variant={editor.isActive('highlight') ? "solid" : "ghost"}
                colorScheme={editor.isActive('highlight') ? "blue" : "gray"}
                rounded="full"
                aria-label="Highlight"
                onClick={() => editor.chain().focus().toggleHighlight().run()}
            />
        </>
    )
};

export default MenuMark;