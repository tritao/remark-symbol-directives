import { CONTINUE, visit } from 'unist-util-visit'
import type { Root as MdastRoot } from 'mdast'
import 'mdast-util-directive'
import 'mdast-util-to-hast'
import { fromHtml } from 'hast-util-from-html'
import { SymbolIcons } from './icons'

/**
 * adds icons for symbol types
 * ```
 * :symbol[class]
 * ```
 * @see {@link symbols} to see supported symbol types and edit icons
 */
export default function remarkSymbolDirectives() {
  return function transformer(tree: MdastRoot) {
    visit(tree, (node) => {
      if (node.type === 'textDirective') {
        let value = node.children[0]?.type === 'text' ?
          node.children[0].value : undefined;
        if (!value)
          return CONTINUE

        const data = node.data || (node.data = {});

        const symbol = symbols[value];
        if (!symbol)
          return CONTINUE;

        const svgNode = fromHtml(symbol.icon, { fragment: true }).children[0]!;
        node.children = [];
        data.hName = 'span';
        data.hProperties = { class: `symbol symbol-${value}` };
        data.hChildren = [svgNode];
      }
      return CONTINUE;
    });
  };
}

type SymbolDefinition = {
  title: string,
  icon: string,
}

// https://github.com/microsoft/vscode/blob/main/src/vs/workbench/browser/parts/sidebar/sidebarPart.ts
// 
const symbols: {
  [key: string]: SymbolDefinition,
} = {
  'array': {
    title: "Array",
    icon: SymbolIcons.array
  },
  'boolean': {
    title: "Boolean",
    icon: SymbolIcons.boolean
  },
  'method': {
    title: "Method",
    icon: SymbolIcons.method
  },
  'function': {
    title: "Function",
    icon: SymbolIcons.method
  },
  'constructor': {
    title: "Constructor",
    icon: SymbolIcons.method
  },
  'field': {
    title: "Field",
    icon: SymbolIcons.field
  },
  'variable': {
    title: "Variable",
    icon: SymbolIcons.variable
  },
  'class': {
    title: "Class",
    icon: SymbolIcons.class
  },
  'struct': {
    title: "Struct",
    icon: SymbolIcons.structure
  },
  'interface': {
    title: "Interface",
    icon: SymbolIcons.interface
  },
  'module': {
    title: "Module",
    icon: SymbolIcons.namespace
  },
  'property': {
    title: "Property",
    icon: SymbolIcons.property
  },
  'event': {
    title: "Event",
    icon: SymbolIcons.event
  },
  'operator': {
    title: "Operator",
    icon: SymbolIcons.operator
  },
  'unit': {
    title: "Unit",
    icon: SymbolIcons.ruler
  },
  'value': {
    title: "Value",
    icon: SymbolIcons.enum
  },
  'constant': {
    title: "Constant",
    icon: SymbolIcons.constant
  },
  'enum': {
    title: "Enum",
    icon: SymbolIcons.enum
  },
  'enummember': {
    title: "EnumMember",
    icon: SymbolIcons.enumMember
  },
  'keyword': {
    title: "Keyword",
    icon: SymbolIcons.keyword
  },
  'text': {
    title: "Text",
    icon: SymbolIcons.key
  },
  'color': {
    title: "Color",
    icon: SymbolIcons.color
  },
  'file': {
    title: "File",
    icon: SymbolIcons.file
  },
  // 'reference': {
  //   title: "Reference",
  //   icon: SymbolIcons.re
  // },
  // 'customcolor': {
  //   title: "Customcolor",
  //   icon: 
  // },
  // 'folder': {
  //   title: "Folder",
  //   icon: ''
  // },
  // 'typeparameter': {
  //   title: "TypeParameter",
  //   icon: ''
  // },
  // 'user': {
  //   title: "User",
  //   icon: ''
  // },
  // 'issue': {
  //   title: "Issue",
  //   icon: ''
  // },
};
