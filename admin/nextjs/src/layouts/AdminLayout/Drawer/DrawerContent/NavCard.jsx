import PropTypes from 'prop-types';

// @next
import Link from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import LogoSection from '@/components/logo';
import MainCard from '@/components/MainCard';
import { AvatarSize } from '@/enum';

// @assets
import { IconBolt } from '@tabler/icons-react';

/***************************  NAVIGATION CARD - DATA  ***************************/

const data = {
  title: 'Upgrade Your Experience',
  description: 'Take your experience to the next level with our premium offering. Buy now and enjoy more!',
  icon: <IconBolt size={16} />
};

/***************************  NAVIGATION CARD - CONTENT  ***************************/

function CardContent({ title, description, icon }) {
  return (
    <Stack sx={{ gap: 3 }}>
      <Stack direction="row" sx={{ gap: 0.25, alignItems: 'center' }}>
        <Avatar variant="rounded" size={AvatarSize.XS} sx={{ bgcolor: 'transparent' }}>
          <LogoSection isIcon sx={{ '& .MuiBox-root': { width: 'auto', height: 'auto' } }} />
        </Avatar>
        <Typography variant="body2">{process.env.NEXT_PUBLIC_VERSION}</Typography>
      </Stack>
      <Stack sx={{ gap: 1, alignItems: 'flex-start', textWrap: 'wrap' }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
        <Button
          startIcon={icon}
          variant="contained"
          component={Link}
          href="https://mui.com/store/items/saasable-multipurpose-ui-kit-and-dashboard/"
          target="_blank"
          sx={{ mt: 0.5 }}
        >
          Buy Now
        </Button>
      </Stack>
    </Stack>
  );
}

/***************************  DRAWER CONTENT - NAVIGATION CARD  ***************************/

export default function NavCard() {
  return (
    <MainCard sx={{ p: 1.5, bgcolor: 'grey.50', boxShadow: 'none', mb: 3 }}>
      <CardContent title={data.title} description={data.description} icon={data.icon} />
    </MainCard>
  );
}

CardContent.propTypes = { title: PropTypes.string, description: PropTypes.string, icon: PropTypes.any };
