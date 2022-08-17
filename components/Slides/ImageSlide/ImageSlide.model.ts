import { ImageField, TitleField } from "@prismicio/types";
import { ISlide } from "..";

export interface IImageSlide extends ISlide {
    slide_title: TitleField<"filled">;
    slide_image: ImageField;
}

export interface ImageSlideProps {
    content: IImageSlide;
}
