import { getDesignTokens } from './themePrimitives';
import dataDisplayCustomizations from '../customizations/dataDisplay';
import feedbackCustomizations from '../customizations/feedback';
import inputsCustomizations from '../customizations/inputs';
import navigationCustomizations from '../customizations/navigation';
import surfacesCustomizations from '../customizations/surfaces';

export default function getSignUpTheme(mode) {
  return {
    ...getDesignTokens(mode),
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  };
}