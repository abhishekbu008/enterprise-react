import React from "react";
import { Spacing } from "@ds.e/foundation";
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FunctionComponent<ColorProps>;
export default Color;
