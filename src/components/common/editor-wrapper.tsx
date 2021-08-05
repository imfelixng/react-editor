import React from 'react';
import { Flex, Box, Text } from "@chakra-ui/react";

type Props = {
    editorTitle: string,
    footerComp: React.ReactElement
};

const EditorWrapper: React.FC<Props> = ({ children, footerComp }) => {
    return (
        <Flex
            flexDir="column"
            maxWidth="700px"
            mx="auto" my={4}
            borderWidth={1}
            rounded="base"
        >
            <Box bg="gray.200" px={4} py={2} roundedTop="base">
                <Text fontWeight="700" color="blue.500" fontSize="xs">TIPTAP EDITOR</Text>
            </Box>
            <Box>
                {children}
            </Box>
            {footerComp}
        </Flex>
    )
};

export default EditorWrapper;