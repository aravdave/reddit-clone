import CreateCommunityModal from "@/components/Modal/Auth/CreateCommunity/CreateCommunityModal";
import { Icon, MenuItem, Flex } from "@chakra-ui/react";
import { User } from "@firebase/auth";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";

type Props = {
  user?: User | null;
};

const Communities = ({ user }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Flex align="center">
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create community
        </Flex>
      </MenuItem>
    </>
  );
};

export default Communities;
