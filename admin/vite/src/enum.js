/** Navigation items `action.type` enum */
export let NavActionType;

(function (NavActionType) {
  NavActionType['FUNCTION'] = 'function';
  NavActionType['LINK'] = 'link';
})(NavActionType || (NavActionType = {}));

/** Tabs custom props `type` enum */
export let TabsType;

(function (TabsType) {
  TabsType['SEGMENTED'] = 'segmented';
})(TabsType || (TabsType = {}));

/** LinearProgress custom props `type` enum */
export let LinearProgressType;

(function (LinearProgressType) {
  LinearProgressType['LIGHT'] = 'light';
})(LinearProgressType || (LinearProgressType = {}));

/** LinearProgress with label custom props `placement` enum */
export let LinearProgressPlacement;

(function (LinearProgressPlacement) {
  LinearProgressPlacement['TOP'] = 'top';
  LinearProgressPlacement['BOTTOM'] = 'bottom';
  LinearProgressPlacement['LEFT'] = 'left';
  LinearProgressPlacement['RIGHT'] = 'right';
  LinearProgressPlacement['TOPRIGHT'] = 'top-right';
  LinearProgressPlacement['BOTTOMRIGHT'] = 'bottom-right';
  LinearProgressPlacement['TOPLEFT'] = 'top-left';
  LinearProgressPlacement['BOTTOMLEFT'] = 'bottom-left';
})(LinearProgressPlacement || (LinearProgressPlacement = {}));

/** Chip custom props `position` enum */
export let ChipIconPosition;

(function (ChipIconPosition) {
  ChipIconPosition['RIGHT'] = 'right';
})(ChipIconPosition || (ChipIconPosition = {}));

/** Avatar custom props `size` enum */
export let AvatarSize;

(function (AvatarSize) {
  AvatarSize['BADGE'] = 'badge';
  AvatarSize['XXS'] = 'xxs';
  AvatarSize['XS'] = 'xs';
  AvatarSize['SM'] = 'sm';
  AvatarSize['MD'] = 'md';
  AvatarSize['LG'] = 'lg';
  AvatarSize['XL'] = 'xl';
})(AvatarSize || (AvatarSize = {}));

/** Modal custom props `maxWidth` enum */
export let ModalSize;

(function (ModalSize) {
  ModalSize['XS'] = 'xs';
  ModalSize['SM'] = 'sm';
  ModalSize['MD'] = 'md';
  ModalSize['LG'] = 'lg';
  ModalSize['XL'] = 'xl';
})(ModalSize || (ModalSize = {}));

/** Chart custom view mode enum */
export let ViewMode;

(function (ViewMode) {
  ViewMode['DAILY'] = 'Daily';
  ViewMode['MONTHLY'] = 'Monthly';
  ViewMode['YEARLY'] = 'Yearly';
})(ViewMode || (ViewMode = {}));

/** Auth social props `type` enum */
export let SocialTypes;

(function (SocialTypes) {
  SocialTypes['HORIZONTAL'] = 'horizontal';
  SocialTypes['VERTICAL'] = 'vertical';
})(SocialTypes || (SocialTypes = {}));

/** Auth role enum */
export let AuthRole;

(function (AuthRole) {
  AuthRole['SUPER_ADMIN'] = 'super-admin';
  AuthRole['ADMIN'] = 'admin';
  AuthRole['USER'] = 'user';
})(AuthRole || (AuthRole = {}));

/** Auth type enum */
export let AuthType;

(function (AuthType) {
  AuthType['MOCK'] = 'mock';
  AuthType['SUPABASE'] = 'supabase';
  AuthType['AWS'] = 'aws';
})(AuthType || (AuthType = {}));
