import React from 'react';
import { IconButton, Icon, Button } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { MdUndo, MdRedo } from 'react-icons/md';

type Props = {
    editor: Editor
}

const MenuUtility = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdUndo} boxSize={4} />}
                size="xs" variant="ghost"
                colorScheme="gray"
                rounded="full"
                aria-label="Undo"
                onClick={() => editor.chain().focus().undo().run()}
            />
            <IconButton
                icon={<Icon as={MdRedo} boxSize={4} />}
                size="xs" variant="ghost"
                colorScheme="gray"
                rounded="full"
                aria-label="Redo"
                onClick={() => editor.chain().focus().redo().run()}
            />
            <Button
                size="xs" variant="ghost"
                onClick={() => {
                    editor.chain().focus().unsetAllMarks().run();
                    editor.chain().focus().clearNodes().run();
                }}
            >
                Reset
            </Button>
        </>
    )
};

export default MenuUtility;