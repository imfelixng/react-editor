import React from 'react';
import { IconButton, Icon } from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import { MdLooksOne, MdLooksTwo, MdLooks3, MdLooks4, MdLooks5, MdLooks6 } from "react-icons/md";

type Props = {
    editor: Editor
}

const MenuHeading = ({ editor }: Props) => {
    return (
        <>
            <IconButton
                icon={<Icon as={MdLooksOne} boxSize={4} />}
                size="xs" variant={editor.isActive('heading', { level: 1 }) ? "solid" : "ghost"}
                colorScheme={editor.isActive('heading', { level: 1 }) ? "blue" : "gray"}
                rounded="full"
                aria-label="Heading 1"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            />
            <IconButton
                icon={<Icon as={MdLooksTwo} boxSize={4} />}
                size="xs" variant={editor.isActive('heading', { level: 2 }) ? "solid" : "ghost"}
                colorScheme={editor.isActive('heading', { level: 2 }) ? "blue" : "gray"}
                rounded="full"
                aria-label="Heading 2"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            />
            <IconButton
                icon={<Icon as={MdLooks3} boxSize={4} />}
                size="xs" variant={editor.isActive('heading', { level: 3 }) ? "solid" : "ghost"}
                colorScheme={editor.isActive('heading', { level: 3 }) ? "blue" : "gray"}
                rounded="full"
                aria-label="Heading 3"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            />
            <IconButton
                icon={<Icon as={MdLooks4} boxSize={4} />}
                size="xs" variant={editor.isActive('heading', { level: 4 }) ? "solid" : "ghost"}
                colorScheme={editor.isActive('heading', { level: 4 }) ? "blue" : "gray"}
                rounded="full"
                aria-label="Heading 4"
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            />
            <IconButton
                icon={<Icon as={MdLooks5} boxSize={4} />}
                size="xs" variant={editor.isActive('heading', { level: 5 }) ? "solid" : "ghost"}
                colorScheme={editor.isActive('heading', { level: 5 }) ? "blue" : "gray"}
                rounded="full"
                aria-label="Heading 5"
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            />
            <IconButton
                icon={<Icon as={MdLooks6} boxSize={4} />}
                size="xs" variant={editor.isActive('heading', { level: 6 }) ? "solid" : "ghost"}
                colorScheme={editor.isActive('heading', { level: 6 }) ? "blue" : "gray"}
                rounded="full"
                aria-label="Heading 6"
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            />
        </>
    )
};

export default MenuHeading;