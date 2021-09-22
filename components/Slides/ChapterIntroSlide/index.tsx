import { TitleField, RichTextField, NumberField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide, { IBaseSlide } from "..";
import styles from "./ChapterIntroSlide.module.scss";

export interface IChapterIntroSlide extends IBaseSlide {
    slide_chapter_number: NumberField;
    slide_subtitle: RichTextField;
    slide_title: TitleField;
}

interface ChapterIntroSlideProps {
    content: IChapterIntroSlide;
}

/**
 * The text slide component
 */
export default function ChapterIntroSlide(props: ChapterIntroSlideProps): JSX.Element {
    const richTextContent = PrismicDOM.RichText.asHtml(props.content.slide_subtitle);

    return (
        <BaseSlide content={props.content} className={styles.chapterIntroSlide}>
            <div className={styles.content}>
                <div className={styles.chapterNumber}>
                    <span>{props.content.slide_chapter_number}</span>
                </div>

                <div
                    className="subtitle-small"
                    dangerouslySetInnerHTML={{ __html: richTextContent }}
                />

                <h2 className="title">{props.content.slide_title[0].text}</h2>
            </div>
        </BaseSlide>
    );
}
