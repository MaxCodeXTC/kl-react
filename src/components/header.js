/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Button } from './button';
import { DesktopOnly } from './desktop-only';
import { NavLink } from './nav-link';
import { Icon } from './icon';
// eslint-disable-next-line
import React from 'react';

export function Header() {
  const { title } = useSiteMetadata();

  return (
    <>
      <NavLink
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
        }}
        css={theme => ({
          [`@media screen and (max-width: ${theme.breakpoints[0]})`]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        })}
        as={Link}
        to="/"
      >
        <Icon
          sx={{
            marginRight: 1,
          }}
        />
        {title}
      </NavLink>
      <div sx={{ mx: 'auto' }} />
      <DesktopOnly>
        <NavLink as={Link} to="/events">
          Events
        </NavLink>
        <NavLink as={Link} to="/speakers">
          Speakers
        </NavLink>
      </DesktopOnly>
      <Button as={Link} to="/#cta">
        Join{' '}
        <DesktopOnly>
          <span>Meetup</span>
        </DesktopOnly>
      </Button>
    </>
  );
}