import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { HiMinus } from 'react-icons/hi';

type Props = {
    editor: Editor
}

const MenuHr = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={HiMinus} boxSize={4} />}
                size="xs" variant="ghost"
                colorScheme="gray"
                rounded="full"
                aria-label="Hr"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
            />
        </>
    )
};

export default MenuHr;