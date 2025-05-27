import {
  BLOCKS,
  MARKS,
  Text,
  Node,
  Block,
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
