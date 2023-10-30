// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/teddyj/Library/Mobile Documents/com~apple~CloudDocs/Documents/workspace/dev/nicenote/node_modules/_@umijs_runtime@3.5.41@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/teddyj/Library/Mobile Documents/com~apple~CloudDocs/Documents/workspace/dev/nicenote/node_modules/_@umijs_preset-dumi@1.1.53@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/teddyj/Library/Mobile Documents/com~apple~CloudDocs/Documents/workspace/dev/nicenote/node_modules/_dumi-theme-default@1.1.24@dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/guide",
        "component": require('/Users/teddyj/Library/Mobile Documents/com~apple~CloudDocs/Documents/workspace/dev/nicenote/new/docs/guide.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide.md",
          "updatedTime": 1698630719271,
          "slugs": [],
          "title": "Guide"
        },
        "title": "Guide - nicenote"
      },
      {
        "path": "/",
        "component": require('/Users/teddyj/Library/Mobile Documents/com~apple~CloudDocs/Documents/workspace/dev/nicenote/new/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1698630719273,
          "title": "A static site based on dumi",
          "hero": {
            "title": "Site",
            "description": "nicenote,nicecode,学习,总结",
            "actions": [
              {
                "text": "Hello",
                "link": "/"
              },
              {
                "text": "World",
                "link": "/"
              }
            ]
          },
          "features": [
            {
              "title": "Hello",
              "emoji": "💎",
              "description": "Put hello description here"
            },
            {
              "title": "World",
              "emoji": "🌈",
              "description": "Put world description here"
            },
            {
              "title": "!",
              "emoji": "🚀",
              "description": "Put ! description here"
            }
          ],
          "slugs": []
        },
        "title": "A static site based on dumi - nicenote"
      }
    ],
    "title": "nicenote",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
