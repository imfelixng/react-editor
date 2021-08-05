import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md';

type Props = {
    editor: Editor
}

const MenuList = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdFormatListBulleted} boxSize={4} />}
                size="xs" variant={editor.isActive('bulletList') ? "solid" : "ghost"}
                colorScheme={editor.isActive('bulletList') ? "blue" : "gray"}
                rounded="full"
                aria-label="Bullet List"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            />
            <IconButton
                icon={<Icon as={MdFormatListNumbered} boxSize={4} />}
                size="xs" variant={editor.isActive('orderedList') ? "solid" : "ghost"}
                colorScheme={editor.isActive('orderedList') ? "blue" : "gray"}
                rounded="full"
                aria-label="Bullet List"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            />
        </>
    )
};

export default MenuList;