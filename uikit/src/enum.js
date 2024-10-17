//@auth.ts

//@faq.ts
export let ListBadgeColors;

(function (ListBadgeColors) {
  ListBadgeColors['WHITE'] = 'white';
  ListBadgeColors['PRIMARY'] = 'primary';
})(ListBadgeColors || (ListBadgeColors = {}));

//@footer.ts
export let CopyrightType;

(function (CopyrightType) {
  CopyrightType['TYPE1'] = 'default';
  CopyrightType['TYPE2'] = 'type2';
  CopyrightType['TYPE3'] = 'type3';
})(CopyrightType || (CopyrightType = {}));

//@icon
export let IconType;

(function (IconType) {
  IconType['STROKE'] = 'stroke';
  IconType['FILL'] = 'fill';
  IconType['CUSTOM'] = 'custom';
})(IconType || (IconType = {}));

//@navbar.ts
export let MegaMenuType;

(function (MegaMenuType) {
  MegaMenuType['MEGAMENU1'] = 'megamenu-1';
  MegaMenuType['MEGAMENU2'] = 'megamenu-2';
  MegaMenuType['MEGAMENU3'] = 'megamenu-3';
  MegaMenuType['MEGAMENU4'] = 'megamenu-4';
  MegaMenuType['MEGAMENU5'] = 'megamenu-5';
})(MegaMenuType || (MegaMenuType = {}));

//@root.ts
export let DynamicComponentType;

(function (DynamicComponentType) {
  DynamicComponentType['ICON'] = 'icons';
  DynamicComponentType['IMAGE'] = 'images';
})(DynamicComponentType || (DynamicComponentType = {}));
