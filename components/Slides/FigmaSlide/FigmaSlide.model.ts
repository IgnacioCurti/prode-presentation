import { RichTextField } from "@prismicio/types";
import { ISlide } from "..";

export interface IFigmaSlide extends ISlide {
    slide_figma_embed: RichTextField;
}

export interface IFigmaSlideProps {
    content: IFigmaSlide;
}
