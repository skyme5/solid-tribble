import React from 'react';

import PropTypes from 'prop-types';
import { IoIosHeart, IoMdArrowRoundForward } from 'react-icons/io';

import Image from '../Image';

import {
  StyledActions,
  StyledContainer,
  StyledContent,
  StyledCoverArt,
  StyledFavourite,
  StyledNicknakeWrapper,
  StyledNickname,
  StyledTitle,
  StyledTitleContainer,
} from './Anime.styled';

import { formatNumber } from '#/utils/common';

const Anime = ({ image, name, favorites, nicknames, url }) => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledCoverArt>
          <Image src={image} alt={name} />
        </StyledCoverArt>
        <StyledTitleContainer>
          <StyledTitle>
            <span>{name}</span>
            <StyledFavourite>
              <IoIosHeart fill="red" />
              <span>&nbsp;{formatNumber(favorites)}</span>
            </StyledFavourite>
          </StyledTitle>
          <StyledNicknakeWrapper>
            {nicknames.map((nickname) => (
              <StyledNickname key={nickname}>{nickname}</StyledNickname>
            ))}
          </StyledNicknakeWrapper>
        </StyledTitleContainer>
      </StyledContent>
      <StyledActions>
        <a href={url} target="_blank" rel="noreferrer" aria-label={`link to ${name}`}>
          <IoMdArrowRoundForward size={60} fill="white" />
        </a>
      </StyledActions>
    </StyledContainer>
  );
};

Anime.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  favorites: PropTypes.number.isRequired,
  nicknames: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

export default Anime;
