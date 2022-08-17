import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { IFigmaSlideProps } from "./FigmaSlide.model";
import styles from "./FigmaSlide.module.scss";

/**
 * The Figma slide component
 */
export default function FigmaSlide(props: IFigmaSlideProps): JSX.Element {
    const embed = PrismicDOM.RichText.asText(props.content.slide_figma_embed);

    return (
        <div className={styles.content}>
            <div className={styles.embed} dangerouslySetInnerHTML={{ __html: embed }} />
        </div>
    );
}
