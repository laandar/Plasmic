// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4NLjRPDETTpPj6UCqDMUZL
// Component: 2ovUuZkqOtJcvb
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 4NLjRPDETTpPj6UCqDMUZL/projectcss
import sty from "./PlasmicBullet.module.css"; // plasmic-import: 2ovUuZkqOtJcvb/css
import Done24Pxsvg2Icon from "./icons/PlasmicIcon__Done24Pxsvg2"; // plasmic-import: PaYkELkjuzCRYV/icon

export const PlasmicBullet__VariantProps = new Array();

export const PlasmicBullet__ArgProps = new Array("children");

function PlasmicBullet__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <Done24Pxsvg2Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      {p.renderPlasmicSlot({
        defaultContents: "Lorem ipsum dolor velit",
        value: args.children
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBullet__ArgProps,
      internalVariantPropNames: PlasmicBullet__VariantProps
    });

    return PlasmicBullet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBullet";
  } else {
    func.displayName = `PlasmicBullet.${nodeName}`;
  }
  return func;
}

export const PlasmicBullet = Object.assign(
  // Top-level PlasmicBullet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicBullet
    internalVariantProps: PlasmicBullet__VariantProps,
    internalArgProps: PlasmicBullet__ArgProps
  }
);

export default PlasmicBullet;
/* prettier-ignore-end */
