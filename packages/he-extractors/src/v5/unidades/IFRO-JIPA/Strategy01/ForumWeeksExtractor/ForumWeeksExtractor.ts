import { DOMService } from "../../../../shared";
import { ForumTopicsExtractor } from "../../../../shared/Moodle";

export class ForumWeeksExtractor {
  static async extractLatestWeekTopicFromForumURL(forumURL: string) {
    const allGrades = await ForumWeeksExtractor.extractWeekTopicsFromForumURL(
      forumURL
    );

    const latestGrade = allGrades[allGrades.length - 1] ?? null;

    return latestGrade;
  }

  static extractWeekTopicsFromForumURL(forumURL: string) {
    return fetch(forumURL)
      .then((res) => res.text())
      .then(DOMService.parseDocument)
      .then(ForumWeeksExtractor.extractWeekTopicsFromForumDocument);
  }

  static async extractWeekTopicsFromForumDocument(doc: Document) {
    const PATTERNS_TO_INCLUDE: string[] = ["HORÁRIO", "TÉCNICO"];
    const PATTERNS_TO_EXCLUDE: string[] = ["EXAME", "RECUPERAÇÃO"];

    const allForumTopics =
      await ForumTopicsExtractor.extractTopicsFromForumDocument(doc);

    const weekTopics = allForumTopics.filter(({ title }) => {
      const text = title.toUpperCase();

      return (
        PATTERNS_TO_INCLUDE.every((pattern) => text.includes(pattern)) &&
        PATTERNS_TO_EXCLUDE.every((pattern) => !text.includes(pattern))
      );
    });

    return weekTopics;
  }
}
