import {
  BLOCKS,
  INLINES,
  MARKS,
  Text,
  Node,
  Block,
  Inline,
} from '@contentful/rich-text-types';

export const renderContentfulNode = (node: Node, key: string): JSX.Element | null => {
  switch (node.nodeType) {
    case BLOCKS.PARAGRAPH: {
      const paragraph = node as Block;
      return (
        <p key={key}>
          {paragraph.content.map((child, i) =>
            renderContentfulNode(child, `${key}-p-${i}`)
          )}
        </p>
      );
    }

    case BLOCKS.HEADING_1: {
      const heading = node as Block;
      return (
        <h1 key={key}>
          {heading.content.map((child, i) =>
            renderContentfulNode(child, `${key}-h1-${i}`)
          )}
        </h1>
      );
    }

    case BLOCKS.HEADING_2: {
      const heading = node as Block;
      return (
        <h2 key={key}>
          {heading.content.map((child, i) =>
            renderContentfulNode(child, `${key}-h2-${i}`)
          )}
        </h2>
      );
    }

    case BLOCKS.HEADING_3: {
      const heading = node as Block;
      return (
        <h3 key={key}>
          {heading.content.map((child, i) =>
            renderContentfulNode(child, `${key}-h3-${i}`)
          )}
        </h3>
      );
    }

    case BLOCKS.UL_LIST: {
      const list = node as Block;
      return (
        <ul key={key}>
          {list.content.map((child, i) =>
            renderContentfulNode(child, `${key}-ul-${i}`)
          )}
        </ul>
      );
    }

    case BLOCKS.LIST_ITEM: {
      const listItem = node as Block;
      return (
        <li key={key}>
          {listItem.content.map((child, i) =>
            renderContentfulNode(child, `${key}-li-${i}`)
          )}
        </li>
      );
    }

    case INLINES.HYPERLINK: {
      const link = node as Inline;
      const uri = link.data.uri;
      return (
        <a key={key} href={uri} target="_blank" rel="noopener noreferrer">
          {link.content.map((child, i) =>
            renderContentfulNode(child, `${key}-link-${i}`)
          )}
        </a>
      );
    }

    case 'text': {
      const textNode = node as Text;
      let textElement: React.ReactNode = textNode.value;

      if (textNode.marks?.length) {
        textNode.marks.forEach((mark) => {
          switch (mark.type) {
            case MARKS.BOLD:
              textElement = <strong key={`${key}-bold`}>{textElement}</strong>;
              break;
            case MARKS.ITALIC:
              textElement = <em key={`${key}-italic`}>{textElement}</em>;
              break;
            case MARKS.UNDERLINE:
              textElement = <u key={`${key}-underline`}>{textElement}</u>;
              break;
          }
        });
      }

      return <span key={key}>{textElement}</span>;
    }

    default:
      return null;
  }
};
