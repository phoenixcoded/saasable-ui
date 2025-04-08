// @third-party
import { merge } from 'lodash-es';

// @project
import Alert from './Alert';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';
import Backdrop from './Backdrop';
import BarLabel from './BarLabel';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import ChartsAxis from './ChartsAxis';
import ChartsAxiasHighlight from './ChartsAxisHighlight';
import ChartsTooltip from './ChartsTooltip';
import Chip from './Chip';
import FormControlLabel from './FormControlLabel';
import FormHelperText from './FormHelperText';
import IconButton from './IconButton';
import InputAdornment from './InputAdornment';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import OutlinedInput from './OutlinedInput';
import Popper from './Popper';
import Switch from './Switch';
import Tab from './Tab';
import Tabs from './Tabs';
import Tooltip from './Tooltip';

/***************************  OVERRIDES - MAIN  ***************************/

export default function ComponentsOverrides(theme) {
  return merge(
    Alert(),
    Avatar(theme),
    AvatarGroup(),
    Backdrop(theme),
    BarLabel(theme),
    Breadcrumbs(theme),
    Button(theme),
    CardActions(theme),
    CardContent(),
    CardHeader(theme),
    ChartsAxis(theme),
    ChartsAxiasHighlight(theme),
    ChartsTooltip(theme),
    Chip(theme),
    FormControlLabel(theme),
    FormHelperText(theme),
    IconButton(theme),
    InputAdornment(theme),
    InputLabel(theme),
    LinearProgress(theme),
    ListItemButton(theme),
    ListItemIcon(),
    ListItemText(),
    OutlinedInput(theme),
    Popper(),
    Switch(theme),
    Tab(theme),
    Tabs(theme),
    Tooltip(theme)
  );
}
