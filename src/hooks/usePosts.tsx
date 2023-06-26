import { postState } from "@/atoms/postsAtoms";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};

const usePosts = (props: Props) => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelectPost = () => {};

  const onDeletePost = async () => {};

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};

export default usePosts;
