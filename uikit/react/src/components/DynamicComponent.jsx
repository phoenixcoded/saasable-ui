import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// @project
import { DynamicComponentType } from '@/enum';

/***************************  DYNAMIC - IMPORT  ***************************/

function loadComponent(component, type) {
  switch (type) {
    case DynamicComponentType.IMAGE:
      return import(`@/images/${component}`);
    case DynamicComponentType.ICON:
      return import(`@/icons/${component}`);
    default:
      return import(`@/components/logo`);
  }
}

// Cache both the promise (for loading) and the resolved component (for synchronous retrieval)
const componentCache = new Map();
const promiseCache = new Map();

function getComponent(component, type) {
  const key = `${type}:${component}`;
  return componentCache.get(key) || null;
}

function loadComponentAndCache(component, type) {
  const key = `${type}:${component}`;
  let promise = promiseCache.get(key);
  if (!promise) {
    promise = loadComponent(component, type).then((module) => {
      const Comp = module.default;
      componentCache.set(key, Comp);
      return Comp;
    });
    promiseCache.set(key, promise);
  }
  return promise;
}

/***************************  DYNAMIC COMPONENT  ***************************/

/**
 *
 * @param component: string = Used for rendering manually modified SVG components, such as images, icons
 * @param type: DynamicComponentType = Used to choose the path of the rendering component.
 * @param props: any = Used to set dynamic props, such as sx, size, and color.
 * @returns = Import the component dynamically and pass the rendering component.
 */
function DynamicComponent({ component, type, props }) {
  const [Comp, setComp] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let active = true;

    const cached = getComponent(component, type);
    if (cached) {
      setComp(() => cached);
    } else {
      setComp(null);
      loadComponentAndCache(component, type).then((resolvedComp) => {
        if (active) {
          setComp(() => resolvedComp);
        }
      });
    }

    return () => {
      active = false;
    };
  }, [component, type, isMounted]);

  if (!isMounted || !Comp) return null;

  return <Comp {...props} />;
}

export default DynamicComponent;

DynamicComponent.propTypes = { component: PropTypes.string, type: PropTypes.any, props: PropTypes.any };
