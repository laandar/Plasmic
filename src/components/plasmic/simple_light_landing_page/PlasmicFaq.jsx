// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4NLjRPDETTpPj6UCqDMUZL
// Component: uoP0g5iW9T5p1e
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BaseCard from "../../BaseCard"; // plasmic-import: t4mduVIJtzrz3s/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 4NLjRPDETTpPj6UCqDMUZL/projectcss
import sty from "./PlasmicFaq.module.css"; // plasmic-import: uoP0g5iW9T5p1e/css

export const PlasmicFaq__VariantProps = new Array();

export const PlasmicFaq__ArgProps = new Array("children", "slot");

function PlasmicFaq__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__sak0H)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__yf4KB)}>
          <div className={classNames(projectcss.all, sty.freeBox___2WpZb)}>
            {p.renderPlasmicSlot({
              defaultContents: "Are there long-term contracts?",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>

        {p.renderPlasmicSlot({
          defaultContents:
            "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </p.Stack>
    </BaseCard>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFaq__ArgProps,
      internalVariantPropNames: PlasmicFaq__VariantProps
    });

    return PlasmicFaq__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaq";
  } else {
    func.displayName = `PlasmicFaq.${nodeName}`;
  }
  return func;
}

export const PlasmicFaq = Object.assign(
  // Top-level PlasmicFaq renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFaq
    internalVariantProps: PlasmicFaq__VariantProps,
    internalArgProps: PlasmicFaq__ArgProps
  }
);

export default PlasmicFaq;
/* prettier-ignore-end */