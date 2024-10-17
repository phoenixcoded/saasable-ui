import PropTypes from 'prop-types';
// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { IconType } from '@/enum';

/***************************  FOLLOW US - DATA  ***************************/

const socialIcons = [
  {
    icon: 'tabler-filled-linkedin',
    link: { href: `${branding.company.socialLink.linkedin}`, target: '_blank' }
  },
  {
    icon: 'tabler-filled-instagram',
    link: { href: `${branding.company.socialLink.instagram}` }
  },
  {
    icon: 'tabler-filled-facebook',
    link: { href: `${branding.company.socialLink.facebook}`, target: '_blank' }
  },
  {
    icon: 'tabler-filled-youtube',
    link: { href: `${branding.company.socialLink.youtube}`, target: '_blank' }
  },
  {
    icon: 'tabler-filled-brand-github',
    link: { href: `${branding.company.socialLink.github}`, target: '_blank' }
  },
  {
    icon: 'tabler-filled-dribble',
    link: { href: `${branding.company.socialLink.dribble}`, target: '_blank' }
  }
];

/***************************  FOOTER - FOLLOW US  ***************************/

export default function FollowUS({ heading = true, color }) {
  return (
    <Stack sx={{ alignItems: { xs: 'center', md: 'flex-start' }, gap: 2, textAlign: { xs: 'center', md: 'left' } }}>
      {heading && <Typeset {...{ heading: typeof heading === 'string' ? heading : 'Follow Us on', headingProps: { variant: 'h4' } }} />}
      <Stack direction="row" sx={{ gap: { xs: 0.5, sm: 1.5 } }}>
        {socialIcons.map((item, index) => (
          <Link component={NextLink} key={index} {...item.link} sx={{ ...item.link?.sx, WebkitTapHighlightColor: 'transparent' }}>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: color || 'grey.200',
                width: { xs: 40, sm: 52, lg: 56 },
                height: { xs: 40, sm: 52, lg: 56 },
                borderRadius: 3,
                ':hover': { bgcolor: 'grey.300' }
              }}
            >
              <SvgIcon type={IconType.FILL} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
            </Avatar>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}

FollowUS.propTypes = { heading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), color: PropTypes.string };
