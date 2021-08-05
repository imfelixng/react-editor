import React from 'react';
import { Editor } from '@tiptap/react';
import { Divider, HStack } from '@chakra-ui/react';

import MenuHeading from './menu-item/menu-heading';
import MenuAlignment from './menu-item/menu-alignment';
import MenuMark from './menu-item/menu-mark';
import MenuCode from './menu-item/menu-code';
import MenuList from './menu-item/menu-list';
import MenuBlockQuote from './menu-item/menu-blockquote';
import MenuHr from './menu-item/menu-hr';
import MenuUtility from './menu-item/menu-utility';

type Props = {
    editor: Editor | null
}

const MenuBar = ({ editor }: Props) => {
    if (!editor) return null;

    return (
        <>
            <HStack
                flexWrap="wrap"
                px={4} py={2}
                spacing={1}
            >
                <MenuMark editor={editor} />
                <MenuCode editor={editor} />
                <MenuAlignment editor={editor} />
                <MenuHeading editor={editor} />
                <MenuList editor={editor} />
                <MenuBlockQuote editor={editor} />
                <MenuHr editor={editor} />
                <MenuUtility editor={editor} />
            </HStack>
            <Divider variant="dashed" />
        </>
    )
}

export default MenuBar;