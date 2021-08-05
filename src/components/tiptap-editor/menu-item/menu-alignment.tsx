import React from 'react';

import { IconButton, Icon } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight, MdFormatAlignJustify } from 'react-icons/md';

type Props = {
    editor: Editor
}

const MenuAlignment = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdFormatAlignLeft} boxSize={4} />}
                size="xs" variant={editor.isActive({ textAlign: 'left' }) ? "solid" : "ghost"}
                colorScheme={editor.isActive({ textAlign: 'left' }) ? "blue" : "gray"}
                rounded="full"
                aria-label="TextAlign Left"
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
            />
            <IconButton
                icon={<Icon as={MdFormatAlignCenter} boxSize={4} />}
                size="xs" variant={editor.isActive({ textAlign: 'center' }) ? "solid" : "ghost"}
                colorScheme={editor.isActive({ textAlign: 'center' }) ? "blue" : "gray"}
                rounded="full"
                aria-label="TextAlign Center"
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
            />
            <IconButton
                icon={<Icon as={MdFormatAlignRight} boxSize={4} />}
                size="xs" variant={editor.isActive({ textAlign: 'right' }) ? "solid" : "ghost"}
                colorScheme={editor.isActive({ textAlign: 'right' }) ? "blue" : "gray"}
                rounded="full"
                aria-label="TextAlign Right"
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
            />
            <IconButton
                icon={<Icon as={MdFormatAlignJustify} boxSize={4} />}
                size="xs" variant={editor.isActive({ textAlign: 'justify' }) ? "solid" : "ghost"}
                colorScheme={editor.isActive({ textAlign: 'justify' }) ? "blue" : "gray"}
                rounded="full"
                aria-label="TextAlign Justify"
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            />
        </>
    );
};

export default MenuAlignment;