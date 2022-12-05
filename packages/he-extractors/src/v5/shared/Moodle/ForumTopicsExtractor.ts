import { querySelector, querySelectorAll } from "../DOM/DOMService";
import { IExtractedForumTopic } from "./IExtractedForumTopic";

export class ForumTopicsExtractor {
  static async extractTopicsFromForumDocument(
    doc: Document
  ): Promise<IExtractedForumTopic[]> {
    const discussionsListItems = Array.from(
      await querySelectorAll<HTMLTableRowElement>(
        '[data-region="discussion-list-item"]',
        doc
      )
    );

    const discussionsInfos = await Promise.all(
      discussionsListItems.map(
        ForumTopicsExtractor.extractDiscussionInfoFromListItemElement
      )
    );

    return discussionsInfos.sort((a, b) => a.publishedAt - b.publishedAt);
  }

  static extractDiscussionInfoFromListItemElement = async (
    itemElement: HTMLTableRowElement
  ): Promise<IExtractedForumTopic> => {
    const anchorElement = (await querySelector<HTMLAnchorElement>(
      "th:nth-child(2) > div:nth-child(1) > a:nth-child(1)",
      itemElement
    ))!;

    const timeCreatedElement = (await querySelector<HTMLTimeElement>(
      'time[id^="time-created"]',
      itemElement
    ))!;

    const link = anchorElement.getAttribute("href")!;

    const title = anchorElement.textContent!.trim();

    const publishedAt =
      parseInt(timeCreatedElement.getAttribute("data-timestamp")!) * 1000;

    return {
      link,
      title,
      publishedAt,
    };
  };
}
