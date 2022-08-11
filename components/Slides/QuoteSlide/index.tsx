import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { QuoteSlideProps } from "./QuoteSlide.model";
import styles from "./QuoteSlide.module.scss";

/**
 * The quote slide component
 */
// export default function QuoteSlide(props: QuoteSlideProps): JSX.Element {
//     const email = PrismicDOM.RichText.asText(props.content.slide_email);

//     return (
//         <div className={styles.content}>
//             <div className={styles.leftSide}>
//                 <Image
//                     width={125}
//                     height={125}
//                     src={props.content.slide_thumbnail.url!}
//                     alt={props.content.slide_thumbnail.alt!}
//                 />

//                 <h3>{props.content.slide_name[0].text}</h3>
//                 <p className="subtitle-small">
//                     {PrismicDOM.RichText.asText(props.content.slide_title)}
//                 </p>
//             </div>

//             <span className={styles.separator} />

//             <div className={styles.rightSide}>
//                 <div
//                     className={styles.quote}
//                     dangerouslySetInnerHTML={{
//                         __html: PrismicDOM.RichText.asHtml(props.content.slide_quote)
//                     }}
//                 />

//                 <a href={`mailto:${email}`} className={styles.email}>
//                     {email}
//                 </a>

//                 <span className={styles.phone}>
//                     {PrismicDOM.RichText.asText(props.content.slide_phone)}
//                 </span>
//             </div>
//         </div>
//     );
// }

/**
 * The quote slide component
 */
export default function QuoteSlide(props: QuoteSlideProps): JSX.Element {
    return (
        <div className={styles.content}>
            <iframe
                // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                width="1300"
                height="600"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCsB8pjCjnRTN6b2534L8hO%2FProde-Qatar-2022%3Fnode-id%3D0%253A1"
                allowFullScreen
            ></iframe>
        </div>
    );
}
