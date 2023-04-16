import { Flex, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import Directory from "./Directory/Directory";

type Props = {
  children?: ReactNode;
};

export default function Navbar({ children }: Props) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      justify={{ md: "space-between" }}
      bg="white"
      height="44px"
      padding="6px 12px"
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src="/images/redditFace.svg" height="30px" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
}
