// @mui
import Typography from '@mui/material/Typography';

// @project
import ComponentsWrapper from '@/components/ComponentsWrapper';
import PresentationCard from '@/components/cards/PresentationCard';

/***************************  SAMPLE PAGE  ***************************/

export default function SamplePage() {
  return (
    <ComponentsWrapper title="Sample Page">
      <PresentationCard title="Basic Card">
        <Typography variant="body2" color="text.secondary">
          SaasAble offers both a full version and a seed version. The seed version contains minimal code, making it a great starting point
          for your project. You can then migrate specific features or changes from the full version as needed. We recommend beginning with
          the seed version for a more streamlined setup.
        </Typography>
      </PresentationCard>
    </ComponentsWrapper>
  );
}
