// @third-party
import { merge } from 'lodash-es';

// @project
import Accordion from './Accordion';
import AccordionSummary from './AccordionSummary';
import Button from './Button';
import Chip from './Chip';
import Container from './Container';
import IconButton from './IconButton';
import Link from './Link';
import OutlinedInput from './OutlinedInput';
import Switch from './Switch';
import Tab from './Tab';

/***************************  OVERRIDES - MAIN  ***************************/

export default function ComponentsOverrides(theme) {
  return merge(
    Accordion(),
    AccordionSummary(),
    Button(theme),
    Chip(),
    Container(),
    IconButton(theme),
    Link(theme),
    OutlinedInput(theme),
    Switch(theme),
    Tab()
  );
}
