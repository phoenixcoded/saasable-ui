// @third-party
import { merge } from 'lodash-es';

// @project
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import ChartsAxis from './ChartsAxis';
import ChartsAxiasHighlight from './ChartsAxisHighlight';
import ChartsTooltip from './ChartsTooltip';
import Checkbox from './Checkbox';
import Chip from './Chip';
import FormHelperText from './FormHelperText';
import IconButton from './IconButton';
import InputAdornment from './InputAdornment';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import OutlinedInput from './OutlinedInput';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import Popper from './Popper';
import Slider from './Slider';
import Switch from './Switch';
import Tab from './Tab';
import Tabs from './Tabs';
import Tooltip from './Tooltip';

/***************************  OVERRIDES - MAIN  ***************************/

export default function ComponentsOverrides(theme) {
  return merge(
    Avatar(theme),
    Backdrop(theme),
    Breadcrumbs(theme),
    Button(theme),
    CardActions(theme),
    CardContent(),
    CardHeader(theme),
    ChartsAxis(theme),
    ChartsAxiasHighlight(theme),
    ChartsTooltip(theme),
    Checkbox(theme),
    Chip(theme),
    FormHelperText(theme),
    IconButton(theme),
    InputAdornment(theme),
    InputLabel(theme),
    LinearProgress(theme),
    ListItemButton(theme),
    ListItemIcon(),
    ListItemText(),
    OutlinedInput(theme),
    Pagination(theme),
    PaginationItem(theme),
    Popper(),
    Slider(theme),
    Switch(theme),
    Tab(theme),
    Tabs(theme),
    Tooltip(theme)
  );
}
