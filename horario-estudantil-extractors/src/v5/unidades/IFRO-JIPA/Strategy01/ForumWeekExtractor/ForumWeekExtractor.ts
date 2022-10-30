import { DOMService } from "../../../../shared";
import { ForumWeeksExtractor } from "../ForumWeeksExtractor/ForumWeeksExtractor";

export class ForumWeekExtractor {
  static async extractLatestWeekPDFUrlFromForumURL(forumURL: string) {
    const latestTopic =
      await ForumWeeksExtractor.extractLatestWeekTopicFromForumURL(forumURL);

    const pdfURL =
      latestTopic &&
      (await ForumWeekExtractor.extractWeekPDFUrlFromTopicURL(
        latestTopic.link
      ));

    return pdfURL;
  }

  static async extractWeekPDFUrlFromTopicURL(topicURL: string) {
    return fetch(topicURL)
      .then((res) => res.text())
      .then(DOMService.parseDocument)
      .then(ForumWeekExtractor.extractWeekPDFUrlFromTopicDocument);
  }

  static async extractWeekPDFUrlFromTopicDocument(doc: Document) {
    const anchorElement = await DOMService.querySelector<HTMLAnchorElement>(
      '[data-content="forum-discussion"] a[href*=".pdf"]',
      doc
    );

    return anchorElement?.getAttribute("href");
  }
}
