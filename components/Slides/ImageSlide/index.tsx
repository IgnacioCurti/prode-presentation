import { useState } from "react";
import { ImageSlideProps } from "./ImageSlide.model";
import styles from "./ImageSlide.module.scss";

/**
 * The chapter intro slide component
 */
export default function ImageSlide(props: ImageSlideProps): JSX.Element {
    const [zoomImage, setZoomImage] = useState<boolean>(false);

    return (
        <div className={styles.content}>
            <h2 className="title">{props.content.slide_title[0].text}</h2>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                key={props.content.slide_image.url!}
                src={props.content.slide_image.url!}
                alt={props.content.slide_image.alt!}
                onClick={() => setZoomImage(true)}
            />

            {zoomImage && (
                <div className={styles.zoomImage}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        key={props.content.slide_image.url!}
                        src={props.content.slide_image.url!}
                        alt={props.content.slide_image.alt!}
                        onClick={() => setZoomImage(false)}
                    />
                </div>
            )}
        </div>
    );
}
